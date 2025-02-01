<script lang="ts">
    import Engine from "$lib/Engine.svelte";
    import {engineTypes} from "$lib/engineStore";

    let selectedType : string = engineTypes[0];
    let selectedSpeedMultiplier : number = 1.00;

    let startHook;
    let stopHook;

    function onChangeAction() {
        stopHook();
        startHook();
    }
</script>

<main>
    <h1>Visual Pistons</h1>
    <div id="options">
        <select bind:value={selectedType} on:change={onChangeAction}>
            {#each engineTypes as engineType}
                <option>{engineType}</option>
            {/each}
        </select>
        <input type="range" min="0.1" max="1" step="0.1" bind:value={selectedSpeedMultiplier} on:change={onChangeAction}>
        <div id="sound-button" on:click={() => console.log("test")}>
            <img src="/volume.png" alt="Volume" width="30" height="30">
        </div>
    </div>
    <div id="engine">
        <Engine type={selectedType} speedMultiplier={selectedSpeedMultiplier} bind:start={startHook} bind:stop={stopHook} />
    </div>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        font-family: "Courier New", serif;
    }

    h1 {
        text-align: center;
        font-size: 3em;
    }

    #options {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    #engine {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #sound-button {
        cursor: pointer;
    }

    input[type=range] {
        width: 200px;
        margin-top: 10px;
    }

    select {
        width: 200px;
        height: 40px;
    }
</style>