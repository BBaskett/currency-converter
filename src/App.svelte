<script>
  import { onMount } from "svelte";
  import { currency, value } from "./stores.js";
  import Denomination from "./components/Denomination.svelte";

  async function getExchangeRates(base) {
    const ratesURL = `https://api.exchangeratesapi.io/latest?base=${base}`;
    const ratesResponse = await fetch(ratesURL);
    const ratesJson = await ratesResponse.json();
    const codesURL =
      "https://gist.githubusercontent.com/Fluidbyte/2973986/raw/8bb35718d0c90fdacb388961c98b8d56abc392c9/Common-Currency.json";
    const codesResponse = await fetch(codesURL);
    const codesJson = await codesResponse.json();
    // Add EUR object when the base is EUR
    if (base === "EUR") {
      Object.assign(ratesJson.rates, {
        EUR: 1
      });
    }
    return Object.entries(ratesJson.rates)
      .map(entry => ({
        code: entry[0],
        description: Object.values(codesJson).filter(
          x => x.code === entry[0]
        )[0].name,
        decimal_digits: Object.values(codesJson).filter(
          x => x.code === entry[0]
        )[0].decimal_digits,
        rounding: Object.values(codesJson).filter(x => x.code === entry[0])[0]
          .rounding,
        rate: entry[1],
        symbol_native: Object.values(codesJson).filter(
          x => x.code === entry[0]
        )[0].symbol_native
      }))
      .sort((a, b) => {
        if (a.code < b.code) return -1;
        if (a.code > b.code) return 1;
        return 0;
      });
  }

  function handleInput(event) {
    if (
      (event.code === "Period" && $value.toString().includes(".")) ||
      event.code === "KeyE" ||
      event.code === "Minus" ||
      event.code === "Equal"
    ) {
      event.preventDefault();
    }
    if ($value.toString().length === 1 && $value === 0) {
      $value = "";
    }
  }

  $: exchangeRates = getExchangeRates($currency);
</script>

<style>
  @media (max-width: 399px) {
    header {
      flex-direction: column;
    }
    h1 {
      margin: 0.25em 0;
    }
  }

  header {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    height: 4em;
  }

  #controls {
    text-align: center;
    margin-bottom: 1em;
    position: sticky;
    top: 0;
    padding: 1em;
    background-color: rgb(255, 255, 255);
    box-shadow: 0 5px 3px 0 rgba(0, 0, 0, 0.35);
    border-radius: 10px;
    border: 1px solid var(--grey);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #controls span {
    font-weight: 700;
    font-size: 1.25em;
  }

  #master-select {
    border: 1px solid rgb(0, 0, 0);
    margin: 0 0.5em;
  }

  #master-value {
    border: 1px solid rgb(0, 0, 0);
    border-radius: 5px;
    padding: 1px 0.5em;
    flex: auto;
    width: 100%;
  }

  #conversions {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 1em 2em;
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    box-shadow: 0 5px 3px 0 rgba(0, 0, 0, 0.35);
    border: 1px solid var(--grey);
  }
</style>

<header>
  <img src="currency.svg" alt="" />
  <h1>Currency Converter</h1>
</header>
<main>
  {#await exchangeRates}
    <h1 style="text-align: center;">Loading Interface</h1>
  {:then response}
    <section id="controls">
      <span>
        {Object.values(response).filter(x => x.code === $currency)[0].symbol_native}
      </span>
      <select name="currency" id="master-select" bind:value={$currency}>
        {#each response as res}
          <option value={res.code}>{res.code}</option>
        {/each}
      </select>
      <input
        id="master-value"
        type="number"
        pattern="[0-9]*"
        min="0"
        step="0.01"
        placeholder="Enter an amount"
        bind:value={$value}
        on:keydown={handleInput} />
    </section>
    <section id="conversions">
      {#each response as res}
        {#if res.code !== $currency}
          <Denomination data={res} />
        {/if}
      {/each}
    </section>
  {/await}
</main>
<footer>
  <h5>
    Data provided by
    <a href="https://exchangeratesapi.io/">exchangeratesapi.io</a>
    and symbols provided by
    <a href="https://gist.github.com/Fluidbyte/2973986">Fluidbyte</a>
  </h5>
</footer>
