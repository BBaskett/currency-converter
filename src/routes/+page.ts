/** @type {import('./$types').PageLoad} */

export async function load({ fetch, url }) {
  const response = await fetch("/api/conversion-rates");
  const payload = await response.json();
  return payload;
}
