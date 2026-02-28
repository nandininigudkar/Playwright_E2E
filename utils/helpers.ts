export function sleep(ms: number) {
  return new Promise((res) => setTimeout(res, ms));
}

export function uuid() {
  return Math.random().toString(36).slice(2, 10);
}
