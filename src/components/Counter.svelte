<script lang="ts">
    export let label: string, increment: number = 1, decrement: number = increment, multiplier:number = 0, max:number | undefined = undefined, title:boolean = false, padding:boolean = true;

    export let value = 0;

    let add = () => {value += increment}
    let subtract = () => {value -= decrement}

    $: {
        if(value < 0) value = 0;
        if(max && value > max) value = max;
    }

</script>

<div class="container" style="--padding:{padding ? "0.5rem" : "0"}">
    <span class="label {title ? "title" : ""}" title="{multiplier > 0 ? "+/- " + multiplier + " Points": label}">{label}</span>
    <div class="counter">
        <button on:click={()=>subtract()}>-</button>
        <input type="number" bind:value={value} min="0" max={max}>
        <button on:click={()=>add()}>+</button>
    </div>
    
</div>

<style>
    .container * {
        border: unset;
        outline: unset
    }

    .container {
        display: flex;
        box-sizing: border-box;
        justify-content: space-between;
        align-items: center;
        width:100%;
        padding: 0 0 var(--padding) 0;
    }

    .counter {
        display: flex;
        width:fit-content;
        border: 1px solid;
        border-color: #393939;
        border-radius: 5px;
        overflow: hidden;   
        transition: border-color 0.25s ease;
        margin-left: 2rem;
    }

    .counter:focus-within {
        border-color: #E4A234;
        transition: border-color 0.25s ease;
    }

    .label {
        color:#cccccc;
    }

    .label.title {
        font-size: 1.5rem;
        font-weight: 600;
        color:#ffffff;
    }

    button {
        background-color: #393939;
        transition: background-color 0.25s ease;
    }

    button:hover {
        background-color: #606060;
        transition: background-color 0.25s ease;
    }
    
    button:active {
        background-color: #505050;
        transition: background-color 0.125s ease;
    }

    input {
        width:3rem;
        text-align: center;
        font-family: 'IBM Plex Mono', monospace;
        background-color: #131313;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type=number] {
        -moz-appearance: textfield;
        appearance: textfield;
    }
</style>