<script lang="ts">
    import { onMount } from 'svelte';
    import { engineStore } from './engineStore.ts';

    const pathIdle : string = "/piston-idle.svg";
    const pathActive : string = "/piston-active.svg";

    export let index : number;
    export let delay : number;
    export let speed : number;

    let isRunning : boolean = false;
    let pathCurrent : string = pathIdle;

    async function run() {
        isRunning = true;
        await new Promise(resolve => setTimeout(resolve, (delay * index)));
        while (isRunning) {
            // sleep
            await new Promise(resolve => setTimeout(resolve, speed));
            pathCurrent = pathActive;
            await new Promise(resolve => setTimeout(resolve, speed));
            pathCurrent = pathIdle;
        }
    }

    function stop() {
        isRunning = false;
    }

    onMount(() => {
        engineStore.subscribe(store => {
            if (store[index]) {
                run();
            } else {
                stop();
            }
        });
    });
</script>

<img src={pathCurrent} alt="Piston">