<script>
  import Input from "./Components/Input.svelte";
  import Select from "./Components/Select.svelte";
  export let masterCurrency, masterValue, rates;
</script>

<style>
  section {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
</style>

<section>
  <Select bind:value={masterCurrency} data={rates} />
  <Input bind:value={masterValue} />
</section>
