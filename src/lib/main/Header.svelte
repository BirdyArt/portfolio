<script>
  import { typewriter as typewriterAction } from "$utils/actions";
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';

  let innerWidth, desktop = 100, mobile = 0;
  let visible = false;

  $:if (innerWidth < 768) {
    desktop = 0;
    mobile = 100;
  };

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
    { id: 3, src: "/icons/envelope-open-text-solid.svg", alt: "email social icon", href: "mailto:asobolev91@gmail.com" },
    { id: 4, src: "/icons/file-pdf-solid.svg", alt: "pdf social icon", href: "/files/resume.pdf" },
  ];

  onMount(() => visible = true);
</script>

<svelte:window bind:innerWidth={innerWidth} />

{#if visible}
  <div class="pt-8 md:pt-24 px-8 2xl:px-72 xl:px-40 lg:px-12">
    <div class="flex flex-wrap md:flex-nowrap justify-center md:justify-between container mx-auto relative md:filter filter-none md:grayscale hover:filter-none group">
      <div class="items-center text-center md:text-left bg-green-100 rounded-xl md:pl-8 pb-0 pt-48 md:pt-6 lg:py-4 lg:pb-0 -mt-40 md:mt-0 w-full order-last md:order-none" transition:fly="{{ x: desktop, y: mobile, delay: 4300, duration: 1500 }}">
        <div>
          <p class="text-3xl 2xl:pt-2 font-header md:font-sans group-hover:font-display text-green-700 md:text-black group-hover:text-green-700" in:typewriterAction={{ speed: 50, delay: 5000 }}>
            Hi! I'm Artem Sobolev
          </p>
          <div class="flex flex-wrap items-center justify-center md:justify-start pt-3">
            {#each socialIcons as icon,i}
              <a href={icon.href} target="_blank"><img src={icon.src} alt={icon.alt} width="30" class="mx-2 md:mr-4 hovers" transition:fly="{{ x: desktop, y: mobile, delay: 5000 + i*100, duration: 2000 }}" /></a>
            {/each}
          </div>
          <p class="text-xl py-3 font-header md:font-sans group-hover:font-display text-green-700 md:text-black group-hover:text-green-700" in:typewriterAction={{ speed: 50, delay: 6500 }}>
            Frontend Developer skilled in:
          </p>
          <div class="flex flex-wrap items-center justify-center md:justify-start pr-0 md:pr-48 lg:pr-0">
            {#each icons as icon,i}
              <img src={icon.src} alt={icon.alt} width="30" class="mx-2 md:mr-4 md:ml-0 mb-3" transition:fly="{{ x: desktop, y: mobile, delay: 7900 + i*100, duration: 2000 }}" />
            {/each}
          </div>
        </div>  
      </div>
      <div class="md:-ml-40 md:-my-7 lg:-my-16 z-10 w-[350px] md:w-[430px] lg:w-[420px]">
        <img src="/images/profile.webp" alt="profile pic" class="rounded-full"/> 
      </div>
    </div>
  </div>
{/if}

