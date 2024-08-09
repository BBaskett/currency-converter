/** @type {import('./$types').PageLoad} */

export async function load({ params }) {
  const response = await fetch(
    "https://v6.exchangerate-api.com/v6/cd08a31a4b50cbf89c21208b/latest/USD"
  );
  const json = await response.json();
  return json;
}
