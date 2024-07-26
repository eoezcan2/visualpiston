<script lang="ts">
    import Piston from './Piston.svelte';
    import { engineStore } from './engineStore.ts';

    const delay : number = 50;  // Base delay of each piston in ms
    const speed : number = 100; // Delay between each stroke in ms

    export let type : EngineType;   // Type of the engine
    export let speedMultiplier : number;    // Speed multiplier of the engine

    const pistons : number[] = [1, 2, 3, 4, 5, 6];  // Piston count

    /**
     * Notifies each piston component to run
     */
    function startEngine() {
        pistons.forEach((_, index) => { // For each piston
            engineStore.update(store => {   // Update the engine store
                store[index] = true;    // Set the piston to active
                return store;   // Return the updated store
            });
        });
    }

    /**
     * Notifies each piston component to stop
     */
    function stopEngine() {
        pistons.forEach((_, index) => { // For each piston
            engineStore.update(store => {   // Update the engine store
                store[index] = false;   // Set the piston to idle
                return store;   // Return the updated store
            });
        });
    }

</script>

<div id="buttons">
    <input type="button" on:click={startEngine} value="Start Engine">
    <input type="button" id="stop-button" on:click={stopEngine} value="Stop Engine">
</div>

<div id="pistons">
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
    {:else if type === "V4"}
        <div>
            <Piston index="0" delay={delay * 2} speed={speed * speedMultiplier} />
            <Piston index="0" delay={delay} speed={speed * speedMultiplier} />
            <br>
            <Piston index="0" delay={delay * 2} speed={speed * speedMultiplier} />
            <Piston index="0" delay={delay} speed={speed * speedMultiplier} />
        </div>
    {:else }
        Not implemented yet!
    {/if}
</div>

<style>
    #buttons {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    #pistons {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 2%;
    }

    input[type="button"] {
        background-color: black;
        color: white;
        padding: 10px;
        margin: 10px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    input[type="button"]:hover {
        background-color: #333;
    }

    #stop-button {
        background-color: red;
    }
</style>