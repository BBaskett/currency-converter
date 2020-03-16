<script>
  export let value;
</script>

<input
  type="number"
  placeholder="Conversion Amount"
  id="master"
  bind:value
  min="0.01"
  step="0.01" />
