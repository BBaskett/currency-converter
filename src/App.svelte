<script>
  // Componenets
  import Master from "./Master.svelte";
  import Main from "./Main.svelte";

  export let name, defaults;

  let masterValue = defaults.value;
  let masterCurrency = defaults.currency;

  // Development Test Data
  let exchangeRates = {
    USD: 1,
    AED: 3.672,
    ARS: 62.8363,
    AUD: 1.5972,
    BGN: 1.7582,
    BRL: 4.7408,
    BSD: 1.0,
    CAD: 1.3842,
    CHF: 0.9503,
    CLP: 850.1057,
    CNY: 6.9912,
    COP: 4057.4286,
    CZK: 23.4346,
    DKK: 6.7143,
    DOP: 53.9962,
    EGP: 15.6744,
    EUR: 0.8972,
    FJD: 2.2247,
    GBP: 0.8015,
    GTQ: 7.6542,
    HKD: 7.7789,
    HRK: 6.8039,
    HUF: 304.1656,
    IDR: 14731.2703,
    ILS: 3.6662,
    INR: 73.8186,
    ISK: 134.9364,
    JPY: 106.7508,
    KRW: 1209.2207,
    KZT: 400.0282,
    MXN: 21.6593,
    MYR: 4.2767,
    NOK: 10.039,
    NZD: 1.6345,
    PAB: 1.0,
    PEN: 3.5322,
    PHP: 50.9263,
    PKR: 158.3755,
    PLN: 3.9157,
    PYG: 6554.3077,
    RON: 4.3305,
    RUB: 72.8599,
    SAR: 3.7522,
    SEK: 9.7266,
    SGD: 1.4111,
    THB: 31.7421,
    TRY: 6.2929,
    TWD: 30.1102,
    UAH: 26.0262,
    UYU: 44.355,
    ZAR: 16.2085
  };

  //Production API
  //let exchangeRates = getExchangeRates(masterCurrency);

  async function getExchangeRates(denomination) {
    const url = `https://prime.exchangerate-api.com/v5/cd08a31a4b50cbf89c21208b/latest/${denomination}`;
    try {
      let response = await fetch(url, {
        mode: "cors"
      });
      let data = await response.json();
      return await data.conversion_rates;
    } catch (e) {
      console.error(e);
    }
  }
</script>

<style>
  header,
  footer {
    text-align: center;
  }

  footer {
    font-size: 0.75rem;
    color: grey;
  }

  section {
    margin-bottom: 1rem;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  h2 {
    color: #ea00ff;
    text-transform: uppercase;
    font-size: 1.5em;
    font-weight: 100;
  }

  h2.error {
    color: red;
  }
</style>

<section>
  <header>
    <h1>{name}</h1>
  </header>
</section>
{#await exchangeRates}
  <h2>Loading...</h2>
{:then exchangeRates}
  <Master bind:masterCurrency bind:masterValue {exchangeRates} />
  <Main bind:masterCurrency bind:masterValue {exchangeRates} />
{:catch error}
  <h2 class="error">Oops! Something went wrong.</h2>
  <p>{error}</p>
{/await}
<section>
  <footer>
    <p>
      Data provided by
      <a
        href="https://www.exchangerate-api.com/"
        target="_blank"
        rel="noopener noreferrer">
        ExchangeRate-API
      </a>
    </p>
  </footer>
</section>
