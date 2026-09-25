import { env } from "@/config/env";
import { Client } from "@upstash/qstash";

let qstashClient: Client | null = null;

if (env.QSTASH_TOKEN) {
  qstashClient = new Client({ token: env.QSTASH_TOKEN });
}

/**
 * Publishes a payload to the Upstash QStash queue.
 * Returns true if successfully published to the queue, false if it should fall back to local execution.
 */
export async function publishToQueue(endpoint: string, body: any): Promise<boolean> {
  const isLocal = process.env.NODE_ENV === "development";
  
  if (qstashClient && !isLocal) {
    await qstashClient.publishJSON({
      url: `https://matchchayn.com/api/workers/${endpoint}`,
      body,
    });
    return true;
  }
  
  return false;
}
