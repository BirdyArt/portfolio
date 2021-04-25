<script>
  import { fly } from 'svelte/transition';
  import { onMount } from 'svelte';
  import ModalDshift from '$lib/modals/ModalDshift.svelte';
import ModalLibrarycard from '$lib/modals/ModalLibrarycard.svelte';
import ModalAshfaq from '$lib/modals/ModalAshfaq.svelte';
import ModalMapbox from '$lib/modals/ModalMapbox.svelte';
import ModalViks from '$lib/modals/ModalViks.svelte';


  let innerWidth, desktop = 100, mobile = 0;
  let visible = false;
  let viewDshift = false;
  let viewLibrarycard = false;
  let viewAshfaq = false;
  let viewMapbox = false;
  let viewViks = false;

  $:if (innerWidth < 768) {
    desktop = 0;
    mobile = 100;
  };
  onMount(() => visible = true);

</script>

{#if visible}
  <header class="mt-4 md:mt-24 mx-auto relative pb-4 px-8 2xl:px-72 xl:px-40 lg:px-12" transition:fly="{{ x: desktop, y: mobile, delay: 9000, duration: 2000 }}">
    <div class="container group text-center mx-auto py-6 bg-pink-100 md:bg-gray-100 hover:bg-pink-100 md:filter filter-none md:grayscale hover:filter-none rounded-xl">
      <h1 class="text-5xl font-semibold font-display md:font-sans group-hover:font-display text-yellow-500 md:text-black group-hover:text-yellow-500">
        My Works
      </h1>
      <div class="my-5 mx-auto w-24 border-yellow-500 md:border-black group-hover:border-yellow-500	border-2 rounded-full"></div>
      <h3 class="text-3xl text-yellow-500 md:text-black group-hover:text-yellow-500 font-display md:font-sans group-hover:font-display">
        What I had fun with so far
      </h3>
    </div>
  </header>

  <main class="text-center relative md:pb-20 px-8 2xl:px-72 xl:px-40 lg:px-12">
    <div class="container mx-auto relative">
      <div class="grid group grid-cols-1 justify-items-center md:grid-cols-3 p-5 bg-indigo-100 md:bg-gray-100 hover:bg-indigo-100 md:filter filter-none md:grayscale hover:filter-none rounded-xl lg:py-10" transition:fly="{{ x: desktop, y: mobile, delay: 10000, duration: 2000 }}">
        <div class="rounded-3xl overflow-hidden border-indigo-500 md:border-gray-400 group-hover:border-indigo-500 border-2 shadow-lg">
          <img on:click={() => (viewDshift = true)} class="mx-auto" src="/images/logo.webp" width="250" alt="Desktop" />
        </div>
        <div class="col-span-2 mx-2 md:mx-5 mt-5 md:text-left text-indigo-500 md:text-black group-hover:text-indigo-500">
          <div class="flex justify-between md:justify-start items-center pb-3">
            <p on:click={() => (viewDshift = true)} class="text-indigo-500 md:text-black text-3xl font-dshift md:font-sans group-hover:font-dshift group-hover:text-indigo-500">DShift</p>
            <div class="text-white text-lg bg-indigo-500 font-main md:font-sans group-hover:font-main rounded-md ml-2 py-1 px-3">
              #Team
            </div>
          </div>
          <div class="md:flex md:justify-between">
            <p class="text-lg text-left font-main md:font-sans group-hover:font-main">Svelte | GraphQL | FaunaDB | TailwindCSS | Netlify</p>
            <a href="https://github.com/chingu-voyages/v28-svelte-team-09" class="flex items-center text-lg pt-3 md:pt-0 font-main md:font-sans group-hover:font-main" target="_blank"><img src="/icons/github-octocat.svg" width="30" alt="Github"/>GitHub</a>
          </div>
          <p class="mt-3 text-left font-main md:font-sans group-hover:font-main">A blazing fast shift management web app sporting a surprisingly simple interface. You can schedule employees for different areas, specify working hours and break time. Then it could be published, and employees could check it using provided link.</p>
          <button class="bg-indigo-500 rounded px-3 py-2 my-3 text-white font-main md:font-sans group-hover:font-main focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50"
            on:click={() => (viewDshift = true)}>View More
          </button>
          <ModalDshift bind:open={viewDshift} />
        </div>
      </div>
      <div class="grid group mt-4 grid-cols-1 justify-items-center md:grid-cols-3 p-5 lg:px-10 bg-yellow-100 md:bg-gray-100 hover:bg-yellow-100 md:filter filter-none md:grayscale hover:filter-none rounded-xl lg:py-10" transition:fly="{{ x: desktop, y: mobile, delay: 10200, duration: 2000 }}">
        <div class="rounded-3xl overflow-hidden border-green-600 md:border-gray-400 group-hover:border-green-600 border-2 p-[25px] shadow-lg">
          <img on:click={() => (viewLibrarycard = true)} class="mx-auto" src="/images/library.svg" width="200" alt="LibraryCard" />
        </div>
        <div class="col-span-2 mx-2 md:mx-5 mt-5 md:text-left text-green-600 md:text-black group-hover:text-green-600">
          <div class="flex justify-between md:justify-start items-center pb-3">
            <p on:click={() => (viewLibrarycard = true)} class="text-green-600 md:text-black text-3xl font-semibold md:font-normal md:font-sans group-hover:font-semibold group-hover:text-green-600">LibraryCard</p>
            <div class="text-white text-lg bg-green-600 font-normal md:font-sans group-hover:font-normal rounded-md ml-2 py-1 px-3">
              #Solo
            </div>
          </div>
          <div class="md:flex md:justify-between">
            <p class="text-lg text-left md:font-sans">MongoDB | Express | ReactJS | Redux | NodeJS | SASS | Bootstrap</p>
            <a href="https://github.com/BirdyArt/LibraryCard" class="flex items-center text-lg pt-3 md:pt-0 font-normal md:font-sans group-hover:font-normal" target="_blank"><img src="/icons/github-octocat.svg" width="30" alt="Github"/>GitHub</a>
          </div>
          <p class="mt-3 text-left font-normal md:font-sans group-hover:font-normal">LibraryCard is a responsive web app aimed at helping users to build a library of cards with places, people, memories, or anything you can imagine. Then they can navigate their personal collection and find the name of that cool ramen place downtown anytime, anywhere.</p>
          <button class="bg-green-600 rounded px-3 py-2 my-3 text-white font-normal md:font-sans group-hover:font-normal focus:outline-none focus:ring-4 focus:ring-green-600 focus:ring-opacity-50"
            on:click={() => (viewLibrarycard = true)}>View More
          </button>
          <ModalLibrarycard bind:open={viewLibrarycard} />
        </div>
      </div>
      <div class="grid group mt-4 grid-cols-1 justify-items-center md:grid-cols-3 p-5 lg:px-10 bg-gray-200 md:bg-gray-100 hover:bg-gray-200 md:filter filter-none md:grayscale hover:filter-none rounded-xl lg:py-10" transition:fly="{{ x: desktop, y: mobile, delay: 10400, duration: 2000 }}">
        <div class="rounded-3xl overflow-hidden border-gray-600 md:border-gray-400 group-hover:border-gray-600 border-2 p-[35px] shadow-lg">
          <img on:click={() => (viewViks = true)} class="mx-auto rounded-full" src="/images/VMW.svg" width="180" alt="ViksMetalWorks" />
        </div>
        <div class="col-span-2 mx-2 md:mx-5 mt-5 md:text-left text-gray-600 md:text-black group-hover:text-gray-600">
          <div class="flex justify-between md:justify-start items-center pb-3">
            <p on:click={() => (viewViks = true)} class="text-gray-600 font-semibold font-viks md:font-normal md:font-sans md:text-black text-3xl group-hover:font-viks group-hover:font-semibold group-hover:text-gray-600">ViksMetalWorks</p>
            <div class="text-white text-lg bg-gray-600 rounded-md ml-2 py-1 px-3 font-viks md:font-sans group-hover:font-viks">
              #Solo
            </div>
          </div>
          <div class="md:flex md:justify-between">
            <p class="text-lg text-left font-viks md:font-sans group-hover:font-viks">JQuery | Bootstrap | VanillaJS | SASS</p>
            <a href="https://github.com/BirdyArt/ViksMetalWorks" class="flex items-center text-lg pt-3 md:pt-0 font-viks md:font-sans group-hover:font-viks" target="_blank"><img src="/icons/github-octocat.svg" width="30" alt="Github"/>GitHub</a>
          </div>
          <p class="mt-3 text-left font-viks md:font-sans group-hover:font-viks">SPA created for metal-working shop to showcase different products. It has multiple pages and it is available in 2 languages on button toggle: Russian and English</p>
          <button class=" bg-gray-600 rounded px-3 py-2 my-3 text-white font-viks md:font-sans group-hover:font-viks focus:outline-none focus:ring-4 focus:ring-gray-600 focus:ring-opacity-50"
            on:click={() => (viewViks = true)}>View More
          </button>
          <ModalViks bind:open={viewViks} />
        </div>
      </div>
      <div class="grid group mt-4 grid-cols-1 justify-items-center md:grid-cols-3 p-5 lg:px-10 bg-red-100 md:bg-gray-100 hover:bg-red-100 md:filter filter-none md:grayscale hover:filter-none rounded-xl lg:py-10" transition:fly="{{ x: desktop, y: mobile, delay: 10600, duration: 2000 }}">
        <div class="rounded-3xl overflow-hidden border-red-500 md:border-gray-400 group-hover:border-red-500 border-2 p-[35px] shadow-lg">
          <img on:click={() => (viewMapbox = true)} class="mx-auto" src="/images/marker.svg" width="180" alt="MapboxApp" />
        </div>
        <div class="col-span-2 mx-2 md:mx-5 mt-5 md:text-left text-red-500 md:text-black group-hover:text-red-500">
          <div class="flex justify-between md:justify-start items-center pb-3">
            <p on:click={() => (viewMapbox = true)} class="text-red-500 md:text-black text-3xl font-mapbox md:font-sans group-hover:font-mapbox group-hover:text-red-500">MapboxApp</p>
            <div class="text-white text-lg bg-red-500 rounded-md ml-2 py-1 px-3 font-mapbox md:font-sans group-hover:font-mapbox">
              #Solo
            </div>
          </div>
          <div class="md:flex md:justify-between">
            <p class="text-lg text-left font-mapbox md:font-sans group-hover:font-mapbox">ReactJS | Bootstrap | Mapbox API | SASS</p>
            <a href="https://github.com/BirdyArt/Chingu" class="flex items-center text-lg pt-3 md:pt-0 font-mapbox md:font-sans group-hover:font-mapbox" target="_blank"><img src="/icons/github-octocat.svg" width="30" alt="Github"/>GitHub</a>
          </div>
          <p class="mt-3 text-left font-mapbox md:font-sans group-hover:font-mapbox">This app shows a map of Vancouver, Canada with unique location markers. You can toggle icon and filter different locations. I created this app to showcase Mapbox API usage</p>
          <button class="bg-red-500 rounded px-3 py-2 my-3 text-white font-mapbox md:font-sans group-hover:font-mapbox focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-opacity-50"
            on:click={() => (viewMapbox = true)}>View More
          </button>
          <ModalMapbox bind:open={viewMapbox} />
        </div>
      </div>
      <div class="grid group mt-4 grid-cols-1 justify-items-center md:grid-cols-3 p-5 lg:px-10 bg-blue-100 md:bg-gray-100 hover:bg-blue-100 md:filter filter-none md:grayscale hover:filter-none rounded-xl lg:py-10" transition:fly="{{ x: desktop, y: mobile, delay: 10800, duration: 2000 }}">
        <div class="rounded-3xl overflow-hidden border-blue-600 md:border-gray-400 group-hover:border-blue-600 border-2 p-[35px] shadow-lg">
          <img on:click={() => (viewAshfaq = true)} class="mx-auto" src="/images/sun.svg" width="180" alt="LibraryCard" />
        </div>
        <div class="col-span-2 mx-2 md:mx-5 mt-5 md:text-left text-blue-600 md:text-black group-hover:text-blue-600">
          <div class="flex justify-between md:justify-start items-center pb-3">
            <p on:click={() => (viewAshfaq = true)} class="text-blue-600 md:text-black text-3xl font-ashfaq md:font-sans group-hover:font-ashfaq group-hover:text-blue-600">AshfaqIshaq</p>
            <div class="text-white text-lg bg-blue-600 font-main2 md:font-sans group-hover:font-main2 rounded-md ml-2 py-1 px-3">
              #Solo
            </div>
          </div>
          <div class="md:flex md:justify-between">
            <p class="text-lg text-left font-main2 md:font-sans group-hover:font-main2">ReactJS | Bootstrap | GSAP | SASS</p>
            <a href="https://github.com/BirdyArt/ICAF" class="flex items-center text-lg pt-3 md:pt-0 font-main2 md:font-sans group-hover:font-main2" target="_blank"><img src="/icons/github-octocat.svg" width="30" alt="Github"/>GitHub</a>
          </div>
          <p class="mt-3 text-left font-main2 md:font-sans group-hover:font-main2">Landing page that was created for International Child Art Foundation (ICAF) founder - Ashfaq Ishaq. It showcases his new book "Anti-Children" and serves as media addition to book itself - visitors can navigate to certain chapter and view artwork, videos and other book-related content.</p>
          <button class=" bg-blue-600 rounded px-3 py-2 my-3 text-white font-main2 md:font-sans group-hover:font-main2 focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
            on:click={() => (viewAshfaq = true)}>View More
          </button>
          <ModalAshfaq bind:open={viewAshfaq} />
        </div>
      </div>
    </div>
  </main>
{/if}
