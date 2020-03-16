<script>
  export let data, value;
</script>

<style>
  select {
    margin-right: 1rem;
  }
</style>

<select bind:value>
  {#each Object.keys(data) as key}
    <option value={key}>{key}</option>
  {/each}
</select>
