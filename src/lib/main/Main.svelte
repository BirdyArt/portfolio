<script>
  import { typewriter as typewriterAction } from "$utils/actions";
  import { onMount } from 'svelte';

  let visible = false;

  onMount(() => visible = true);
</script>

{#if visible}
	<p class="text-center pt-64 text-2xl" in:typewriterAction>
    Hi there, I'm Artem 👋	
  </p>
{/if}

