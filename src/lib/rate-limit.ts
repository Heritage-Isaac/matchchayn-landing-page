const rateLimit = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 3;

/**
 * Basic in-memory rate limiting to prevent abuse.
 * Returns true if the request is allowed, false if it should be blocked.
 */
export function checkRateLimit(ip: string): boolean {
  if (ip === "unknown") return true;
  
  const now = Date.now();
  const userLimit = rateLimit.get(ip);
  
  if (userLimit && now - userLimit.timestamp < RATE_LIMIT_WINDOW) {
    if (userLimit.count >= MAX_REQUESTS) {
      return false; // Rate limited
    }
    userLimit.count++;
  } else {
    rateLimit.set(ip, { count: 1, timestamp: now });
  }
  
  return true;
}
