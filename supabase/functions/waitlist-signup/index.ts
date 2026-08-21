import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  try {
    const { name, gender, email } = await req.json();

    if (typeof name !== "string" || name.trim().length < 2 || name.length > 120) {
      return json({ error: "Please enter your full name." }, 400);
    }
    if (typeof gender !== "string" || !["Female", "Male", "Non-binary", "Prefer not to say"].includes(gender)) {
      return json({ error: "Please select a gender." }, 400);
    }
    if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || email.length > 200) {
      return json({ error: "Please enter a valid email address." }, 400);
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const { error: dbError } = await supabase
      .from("waitlist_signups")
      .insert({ name: name.trim(), gender, email: email.trim().toLowerCase() });

    if (dbError) {
      console.error("waitlist insert failed:", dbError.message);
      return json({ error: "Could not save your signup. Please try again." }, 500);
    }

    // Mirror the signup into the connected Google Sheet (best effort).
    const lovableKey = Deno.env.get("LOVABLE_API_KEY");
    const sheetsKey = Deno.env.get("GOOGLE_SHEETS_API_KEY");
    const spreadsheetId = Deno.env.get("WAITLIST_SPREADSHEET_ID");

    if (lovableKey && sheetsKey && spreadsheetId) {
      const url =
        `https://connector-gateway.lovable.dev/google_sheets/v4/spreadsheets/${spreadsheetId}` +
        `/values/Waitlist!A:D:append?valueInputOption=USER_ENTERED`;
      const res = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${lovableKey}`,
          "X-Connection-Api-Key": sheetsKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          values: [[new Date().toISOString(), name.trim(), gender, email.trim().toLowerCase()]],
        }),
      });
      if (!res.ok) {
        console.error(`Sheets append failed [${res.status}]: ${await res.text()}`);
      }
    } else {
      console.log("Google Sheet mirroring skipped: connector or spreadsheet id not configured.");
    }

    return json({ success: true });
  } catch (err) {
    console.error("waitlist-signup error:", err);
    return json({ error: "Unexpected error. Please try again." }, 500);
  }
});
