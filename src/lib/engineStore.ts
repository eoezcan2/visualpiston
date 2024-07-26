import { writable } from 'svelte/store';

export const engineTypes = [
    "Single",
    "Inline 2",
    "Inline 4"
]

export const engineStore = writable([]);