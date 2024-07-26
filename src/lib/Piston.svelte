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

    onMount(() => {
        engineStore.subscribe(store => {
            if (store[index]) {
                run();
            } else {
                stop();
            }
        });
    });

    function up() {
        pathCurrent = pathActive;
    }

    function down() {
        pathCurrent = pathIdle;
    }

    async function run() {
        if (isRunning) return;
        isRunning = true;
        await new Promise(resolve => setTimeout(resolve, delay));
        while (isRunning) {
            // sleep
            await new Promise(resolve => setTimeout(resolve, speed));
            up();
            await new Promise(resolve => setTimeout(resolve, speed));
            down();
            console.log(speed);
        }
    }

    function stop() {
        isRunning = false;
    }
</script>

<img src={pathCurrent} alt="Piston">