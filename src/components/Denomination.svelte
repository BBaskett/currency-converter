<script>
  export let data;
  import { onMount } from "svelte";
  import { currency, value } from "../stores.js";
  import { slide } from "svelte/transition";

  $: conversion = ($value * data.rate).toLocaleString(undefined, {
    minimumFractionDigits: data.decimal_digits,
    minimumFractionDigits: data.decimal_digits
  });
</script>

<style>
  div {
    display: flex;
    flex-direction: column;
    margin: 0.5em 0;
  }
  input {
    border: none;
    border-bottom: 1px solid rgb(0, 0, 0);
    padding: 0.5em;
  }

  input.positive {
    color: var(--green);
  }

  input.negative {
    color: var(--red);
  }

  label {
    font-weight: 500;
  }

  span {
    font-size: 0.6em;
    font-weight: 300;
    color: var(--grey);
  }
</style>

<div in:slide>
  <!-- <div> -->
  <input
    class={data.rate >= 1 ? 'positive' : 'negative'}
    name={data.code}
    type="text"
    value={data.symbol_native + ' ' + conversion}
    id={data.code}
    readonly />
  <label for={data.code} title={data.description}>
    {data.code}
    <span title="Conversation Ratio">({data.rate})</span>
  </label>
</div>
