<script>
  import { fade } from "svelte/transition";

  export let masterCurrency, masterValue, exchangeRates;
</script>

<style>
  main {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  main > div {
    margin: 0.25rem;
  }

  .label {
    border-top: 1px solid black;
  }

  .label > span {
    font-weight: 100;
    color: grey;
    font-size: 0.6rem;
    user-select: none;
  }

  input {
    border: none;
  }

  input.positive {
    color: green;
  }

  input.negative {
    color: red;
  }
</style>

<section>
  <main>
    {#each Object.entries(exchangeRates) as entry, index}
      {#if entry[0] !== masterCurrency}
        <div>
          <input
            class={entry[1] > masterValue ? 'positive' : 'negative'}
            type="text"
            placeholder="Waiting"
            pattern="[0-9]*"
            id={index}
            value={(masterValue * entry[1]).toFixed(2)}
            transition:fade
            readOnly />
          <div class="label">
            <strong>{entry[0]}</strong>
            <span title="Conversion Ratio">({entry[1]})</span>
          </div>
        </div>
      {/if}
    {/each}
  </main>
</section>
