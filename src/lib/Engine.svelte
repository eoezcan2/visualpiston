<script lang="ts">
    import Piston from './Piston.svelte';
    import { engineStore } from './engineStore.ts';

    const delay : number = 50;  // Base delay of each piston in ms
    const speed : number = 100; // Delay between each stroke in ms

    export let type : EngineType;
    export let speedMultiplier : number;

    const pistons : number[] = [1, 2, 3, 4, 5, 6];

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

{#if type === "Inline 4"}
    <Piston index="0" delay={delay} speed={speed * speedMultiplier} />
    <Piston index="1" delay={delay * 2} speed={speed * speedMultiplier} />
    <Piston index="2" delay={delay * 2} speed={speed * speedMultiplier} />
    <Piston index="3" delay={delay} speed={speed * speedMultiplier} />
{:else if type === "Inline 2"}
    <Piston index="0" delay={delay} speed={speed * speedMultiplier} />
    <Piston index="1" delay={delay * 2} speed={speed * speedMultiplier} />
{:else if type === "Single"}
    <Piston index="0" delay={delay} speed={speed * speedMultiplier} />
{:else }
    Not implemented yet!
{/if}