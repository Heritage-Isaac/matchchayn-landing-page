import { z } from "zod";

const envSchema = z.object({
  // Add required environment variables here
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  GOOGLE_SHEETS_WEBHOOK_URL: z.string().url().optional(),
  GOOGLE_SHEETS_NEWSLETTER_WEBHOOK_URL: z.string().url().optional(),
  RESEND_API_KEY: z.string().optional(),
});

const parseEnv = () => {
  try {
    return envSchema.parse({
      NODE_ENV: process.env.NODE_ENV,
      GOOGLE_SHEETS_WEBHOOK_URL: process.env.GOOGLE_SHEETS_WEBHOOK_URL,
      GOOGLE_SHEETS_NEWSLETTER_WEBHOOK_URL: process.env.GOOGLE_SHEETS_NEWSLETTER_WEBHOOK_URL,
      RESEND_API_KEY: process.env.RESEND_API_KEY,
    });
  } catch (error) {
    console.error("Invalid environment variables:", error);
    throw new Error("Invalid environment variables");
  }
};

export const env = parseEnv();
