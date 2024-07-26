<script lang="ts">
    import Engine from "$lib/Engine.svelte";
    import {engineTypes} from "$lib/engineStore";

    let selectedType : string = engineTypes[0];
    let selectedSpeedMultiplier : number = 1.00;
</script>

<main>
    <div id="options">
        <select bind:value={selectedType}>
            {#each engineTypes as engineType}
                <option>{engineType}</option>
            {/each}
        </select>
        <input type="range" min="0.1" max="1" step="0.1" bind:value={selectedSpeedMultiplier}>
    </div>
    <div id="engine">
        <Engine type={selectedType} speedMultiplier={selectedSpeedMultiplier} />
    </div>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        font-family: Arial, sans-serif;
    }

    #options {
        display: flex;
        flex-direction: column;
    }

    #engine {
        margin-top: 5%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    input {
        width: 100px;
    }

    select {
        width: 100px;
        height: 40px;

    }
</style>