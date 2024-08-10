<script lang="ts">
  /** @type {import('./$types').PageData} */
  export let data;

  import "../app.css";
  import "papercss/dist/paper.min.css";
  import { Select, Form, NumberInput, Input, Navbar, Button } from "spaper";
  import { CURRENCIES } from "$lib/index";

  let masterControlValue: string = "1";
  let masterControlCurrency: string = "USD";
</script>

<svelte:head>
  <title>Currency Converter</title>
</svelte:head>

<body class="px-8 py-2">
  <Navbar class="mb-8">
    <h3 slot="brand">
      <a href="/">Currency Converter</a>
    </h3>
    <ul class="inline">
      <li>
        <Button
          href="https://github.com/BBaskett/currency-converter"
          target="_blank">Github</Button
        >
      </li>
    </ul>
  </Navbar>

  <main class="flex flex-wrap flex-col">
    <Form class="flex justify-center items-center mb-10">
      <Select class="mr-4" bind:value={masterControlCurrency}>
        {#each CURRENCIES as CURRENCY_MASTER}
          <option value={CURRENCY_MASTER}>{CURRENCY_MASTER}</option>
        {/each}
      </Select>
      <Input bind:value={masterControlValue} />
    </Form>
    <section class="flex flex-wrap justify-center">
      {#each CURRENCIES as CURRENCY_OUTPUT}
        {@const _conversion = data.conversion_rates[CURRENCY_OUTPUT]}
        {@const _value = Number(
          (Number(masterControlValue) * _conversion).toFixed(2)
        )}

        <Form class="currencyWrapper text-center">
          <NumberInput
            class="m-2 text-center"
            label={CURRENCY_OUTPUT}
            controls={false}
            value={_value}
            format="locale"
          />
        </Form>
      {/each}
    </section>
  </main>
  <footer></footer>
</body>
