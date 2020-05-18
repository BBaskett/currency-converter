import { writable } from "svelte/store";

export const currency = writable("USD");

export const value = writable(0);
