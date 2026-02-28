import fetch from "node-fetch";

export async function getJson(url: string) {
  const res = await fetch(url);
  return res.json();
}
