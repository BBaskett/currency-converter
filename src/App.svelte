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
    console.log(event);
  }

  $: exchangeRates = getExchangeRates($currency);
</script>

<style>
  header {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    height: 4em;
  }

  main {
    width: 85vw;
    max-width: 1200px;
    margin: auto;
  }

  #controls {
    text-align: center;
    margin-bottom: 1em;
  }

  #master-select {
    border: 1px solid rgb(0, 0, 0);
  }

  #master-value {
    border: 1px solid rgb(0, 0, 0);
    border-radius: 5px;
    padding: 1px 0.5em;
  }

  #conversions {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 1em 2em;
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    box-shadow: 0 5px 6px 2px rgba(100, 100, 100, 0.35);
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
        on:keyup={handleInput} />
    </section>
    <section id="conversions">
      {#each response as res}
        <Denomination data={res} />
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
