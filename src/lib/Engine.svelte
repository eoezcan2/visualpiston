<script lang="ts">
    import Piston from './Piston.svelte';
    import {EngineType} from '$lib/engineTypes.ts'
    import { engineStore } from './engineStore.ts';

    const delay : number = 50;  // Base delay of each piston in ms
    const speed : number = 100; // Delay between each stroke in ms

    export let type : EngineType;

    let pistons = [1, 2, 3, 4]; // Default array of pistons with their indexes

    /**
     * Notifies each piston component to run
     */
    function startEngine() {
        pistons.forEach((_, index) => {
            engineStore.update(store => {
                store[index] = true;
                return store;
            });
        });
    }

    /**
     * Notifies each piston component to stop
     */
    function stopEngine() {
        pistons.forEach((_, index) => {
            engineStore.update(store => {
                store[index] = false;
                return store;
            });
        });
    }
</script>

<button on:click={startEngine}>Start Engine</button>
<button on:click={stopEngine}>Stop Engine</button>

{#each pistons as piston, index}
    <Piston index={index} delay={delay} speed={speed} />
{/each}
