<script>
  import { typewriter as typewriterAction } from "$utils/actions";
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';

  let visible = false;

  let icons = [
    { id: 1, src: "/icons/javascript.svg", alt: "javascript icon" },
    { id: 2, src: "/icons/css-3.svg", alt: "css-3 icon" },
    { id: 3, src: "/icons/html-5.svg", alt: "html-5 icon" },
    { id: 4, src: "/icons/nodejs-icon.svg", alt: "nodejs icon" },
    { id: 5, src: "/icons/react.svg", alt: "react icon" },
    { id: 6, src: "/icons/graphql.svg", alt: "graphql icon" },
    { id: 7, src: "/icons/svelte-icon.svg", alt: "svelte icon" },
    { id: 8, src: "/icons/tailwindcss-icon.svg", alt: "tailwindcss icon" },
    { id: 9, src: "/icons/sass.svg", alt: "sass icon" },
    { id: 10, src: "/icons/bootstrap.svg", alt: "bootstrap icon" },
    { id: 11, src: "/icons/mongodb.svg", alt: "mongodb icon" },
    { id: 12, src: "/icons/fauna.svg", alt: "faunadb icon" }
  ];

  onMount(() => visible = true);
</script>

{#if visible}
  <div class="grid grid-flow-col grid-cols-1 grid-rows-2 md:grid-cols-3 md:grid-rows-1 gap-4 px-8 2xl:px-80 xl:pl-64 lg:pl-48 lg:pr-24 md:pl-36 md:pt-16">
    <div class="text-center pt-10 lg:pt-16 col-span-2">
      <p class="text-4xl" in:typewriterAction={{ speed: 100, delay: 4500 }}>
        Hi! I'm Artem Sobolev aka BirdyArt
      </p>
      <p class="text-2xl pt-10" transition:fly="{{ x: 100, delay: 8500, duration: 2000 }}">
        Frontend Developer skilled in:
      </p>
      <div class="flex flex-wrap items-center justify-evenly pt-6">
        {#each icons as icon,i}
          <img src={icon.src} alt={icon.alt} width="30" class="m-2 filter grayscale hover:filter-none" transition:fly="{{ x: 100, delay: 9000+i*200, duration: 2000 }}" />
        {/each}
      </div>
    </div>
    <img src="/images/profile.webp" alt="profile pic" width="300" class="rounded-full place-self-center filter grayscale hover:filter-none" />
  </div>
{/if}

