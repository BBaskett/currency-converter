/** @type {import('./$types').RequestHandler} */

export async function GET({ url }) {
  const key: string = "cd08a31a4b50cbf89c21208b";
  let currency: string | null = url.searchParams.get("masterControlCurrency");

  if (currency === null) {
    currency = "USD";
  }

  const response = await fetch(
    `https://v6.exchangerate-api.com/v6/${key}/latest/${currency}`
  );
  const payload = await response.json();
  return new Response(JSON.stringify(payload.conversion_rates));
}
