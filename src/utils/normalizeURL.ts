export function normalizeURL(str: string) {
  try {
    return new URL(str).pathname;
  } catch {
    return str;
  }
}
