<script lang="ts">
    import Engine from "$lib/Engine.svelte";
    import {engineTypes} from "$lib/engineStore";

    let selectedType : string = engineTypes[0];
    let selectedSpeedMultiplier : number = 1.00;
</script>

<main>
    <input type="range" min="0.5" max="2" step="0.25" bind:value={selectedSpeedMultiplier}>
    <select bind:value={selectedType}>
        {#each engineTypes as engineType}
            <option>{engineType}</option>
        {/each}
    </select>
    <Engine type={selectedType} speedMultiplier={selectedSpeedMultiplier} />
</main>