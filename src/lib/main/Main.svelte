<script>
  import { typewriter as typewriterAction } from "$utils/actions";
  import { onMount } from 'svelte';

  let visible = false;

  onMount(() => visible = true);
</script>

{#if visible}
  <div class="grid grid-flow-col grid-cols-1 grid-rows-2 md:grid-cols-3 md:grid-rows-1 gap-4 px-8 2xl:px-80 xl:pl-64 lg:pl-48 lg:pr-24 md:pl-36 md:pt-16">
    <div class="text-center pt-10 lg:pt-16 col-span-2">
      <p class="text-4xl" in:typewriterAction={{ speed: 50, delay: 1000 }}>
        Hi there, I'm Artem Sobolev aka BirdyArt 👋	
      </p>
      <p class="text-xl pt-10" in:typewriterAction={{ speed: 40, delay: 4000 }}>
        I am a Frontend Developer skilled in JavaScript, Svelte, React, Redux, Svelte, Node.js, HTML5, CSS3, SaSS, Mongodb, FaunaDB.
      </p>
    </div>
    <img src="/images/profile.webp" alt="profile pic" width="300" class="rounded-full place-self-center" />
  </div>
{/if}

