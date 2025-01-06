<script>
    export let content = "";
    export let onCreated = () => {};
    import { onMount } from 'svelte'

     onMount(() => {
        const container = document.querySelector('.ds-accordion');
          onCreated(container);
    })
</script>

<div>
    {#if content}
        <div>{@html content}</div>
    {/if}
</div>