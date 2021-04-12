<script lang="ts">
  export let currencies: [string], name: string, storage_name: string;
  import { BASE, MASTER } from "./stores";
  import { onMount } from "svelte";

  let error;
  const storage = window.localStorage.getItem(storage_name);

  // Update storage when currency changes
  $: window.localStorage.setItem(storage_name, $BASE);

  async function getExchangeRates(base: string) {
    const key: string = "cd08a31a4b50cbf89c21208b";
    try {
      const response = await fetch(
        `https://v6.exchangerate-api.com/v6/${key}/latest/${base}`
      );
      return await response.json();
    } catch (e) {
      console.error(e);
      return (error = e);
    }
  }

  onMount(async () => {
    if (storage) {
      // Initialize currency default from storage
      BASE.set(storage);
    }
  });
</script>

<header>
  <h1>{name}</h1>
</header>
<main>
  <div id="master-controls">
    <input type="number" bind:value={$MASTER} />
    <select bind:value={$BASE}>
      <option value="" selected disabled>Currency</option>
      {#each currencies as currency}
        <option value={currency}>{currency}</option>
      {/each}
    </select>
  </div>
  {#if error}
    <p>Error: {error}</p>
  {/if}
  {#await getExchangeRates($BASE)}
    <p id="loading">loading...</p>
  {:then data}
    <div id="conversions">
      {#each currencies as currency}
        <form>
          <input
            type="number"
            name={currency}
            class={data.conversion_rates[currency] > 1 ? "good" : "bad"}
            value={data.conversion_rates[currency] * $MASTER}
            readonly
          />
          <label for={currency}>{currency}</label>
        </form>
      {/each}
    </div>
  {/await}
</main>

<style type="text/scss">
  header {
    text-align: center;
    padding: 1rem 0;
  }

  main {
    #master-controls {
      display: flex;
      justify-content: center;
      padding: 1rem 0;
      * + * {
        margin-left: 1rem;
      }
    }
    #conversions {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      form {
        display: flex;
        flex-direction: column;
        justify-content: stretch;
        padding: 0.5rem;
        input {
          border: none;
        }
        label {
          border-top: 1px solid var(--primary);
        }
      }
    }
    #loading {
      text-align: center;
    }
  }
</style>
