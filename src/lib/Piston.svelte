<script lang="ts">
    import { onMount } from 'svelte';
    import { engineStore } from './engineStore.ts';

    const pathIdle : string = "/piston-idle.svg";   // Path of the piston when idle
    const pathActive : string = "/piston-active.svg";   // Path of the piston when active

    export let index : number;  // Piston index
    export let delay : number;  // Delay of each piston in ms
    export let speed : number;  // Delay between each stroke in ms

    let isRunning : boolean = false;    // Is the piston running?
    let pathCurrent : string = pathIdle;    // Current path of the piston

    onMount(() => {
        engineStore.subscribe(store => {    // Subscribe to the engine store
            if (store[index]) { // If the piston is active
                run();  // Run the piston
            } else {    // If the piston is idle
                stop(); // Stop the piston
            }
        });
    });

    /**
     * Moves the piston up
     */
    function up() {
        pathCurrent = pathActive;
    }

    /**
     * Moves the piston down
     */
    function down() {
        pathCurrent = pathIdle;
    }

    /**
     * Runs the piston up and down
     */
    async function run() {
        if (isRunning) return;  // If the piston is already running, return
        isRunning = true;   // Set the piston to running
        await new Promise(resolve => setTimeout(resolve, delay));   // Delay before starting to create a more realistic effect
        while (isRunning) { // While the piston is running
            await new Promise(resolve => setTimeout(resolve, speed));   // Delay between each stroke
            up();   // Move the piston up
            await new Promise(resolve => setTimeout(resolve, speed));   // Delay between each stroke
            down(); // Move the piston down
        }
    }

    /**
     * Stops the piston
     */
    function stop() {
        isRunning = false;  // Set the piston to not running
    }
</script>

<img src={pathCurrent} alt="Piston">