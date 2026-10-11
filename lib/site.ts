export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.carpfilialmdp.com.ar";

export function getSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return "http://localhost:3000";
}

export function whatsappLink(message: string) {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5492234461253";
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
