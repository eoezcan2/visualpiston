<script lang="ts">
    import Engine from "$lib/Engine.svelte";
    import {EngineType} from '$lib/engineTypes.ts'

    const engineTypes : EngineType[] = Object.keys(EngineType).filter(key => isNaN(Number(key))) as Array<keyof typeof EngineType>; // Get all the keys of the EngineType enum

    let selectedType : EngineType = EngineType.INLINE4;
</script>

<main>
    <select bind:value={selectedType}>
        {#each engineTypes as engineType}
            <option>{engineType}</option>
        {/each}
    </select>
    <Engine type={selectedType} />
</main>