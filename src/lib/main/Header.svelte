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

  let socialIcons = [
    { id: 1, src: "/icons/github-icon.svg", alt: "github social icon", href: "https://github.com/BirdyArt" },
    { id: 2, src: "/icons/linkedin-icon.svg", alt: "linkedin social icon", href: "https://www.linkedin.com/in/artem-sobolev-abbb3b8b/" },
    { id: 3, src: "/icons/envelope-open-text-solid.svg", alt: "email social icon", href: "mailto:asobolev91@gmail.com" }
  ];

  onMount(() => visible = true);
</script>

{#if visible}
  <div class="grid grid-flow-col grid-cols-1 grid-rows-2 md:grid-cols-3 md:grid-rows-1 gap-4 px-8 2xl:px-72 xl:px-48 lg:px-20 md:px-16 pt-16 filter grayscale hover:filter-none">
    <div class="text-left lg:pt-16 col-span-2">
      <p class="text-4xl lg:text-5xl" in:typewriterAction={{ speed: 100, delay: 4500 }}>
        Hi! I'm Artem Sobolev
      </p>
      <p class="text-xl md:text-2xl pt-5" in:typewriterAction={{ speed: 100, delay: 7200 }}>
        Frontend Developer skilled in:
      </p>
      <div class="flex flex-wrap items-center justify-left pt-5">
        {#each icons as icon,i}
          <img src={icon.src} alt={icon.alt} width="30" class="md:mr-10 mr-4 my-1" transition:fly="{{ x: 100, delay: 10500 + i*100, duration: 2000 }}" />
        {/each}
      </div>
      <div class="flex flex-wrap items-center justify-left pt-5">
        <div class="flex flex-wrap items-center justify-left mr-10">
          <p class="text-xl md:text-2xl" transition:fly="{{ x: 100, delay: 12000, duration: 2000 }}">
          Contact:
          </p>
          {#each socialIcons as icon,i}
            <a href={icon.href}><img src={icon.src} alt={icon.alt} width="30" class="mx-5" transition:fly="{{ x: 100, delay: 12500 + i*100, duration: 2000 }}" /></a>
          {/each}
        </div>
        <p class="text-xl md:text-2xl" transition:fly="{{ x: 100, delay: 13000, duration: 2000 }}">
        Resume:
        </p>
         <a href="/files/resume.pdf"><img src="/icons/file-pdf-solid.svg" alt="pdf social icon" width="25" class="mx-5" transition:fly="{{ x: 100, delay: 13200, duration: 2000 }}"/></a>
      </div>
    </div>
    <img src="/images/profile.webp" alt="profile pic" width="400" class="rounded-full place-self-center lg:place-self-end" />
  </div>
{/if}

