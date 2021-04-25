<script>
import ModalBox from "$lib/ModalBox.svelte";
export let open = false;
let clickOutside = true;
</script>

<ModalBox bind:open {clickOutside}>
  <div class="p-6 md:p-12 bg-red-100">
    <h1 class="font-mapbox text-5xl text-center pb-3">MapboxApp</h1>
    <p class="py-2">A blazing fast shift management web app sporting a surprisingly simple interface. Built using Svelte Kit & Tailwind!</p>
    <h2 class="font-main text-3xl text-center py-2 font-semibold">What it can do?</h2>
    <h3 class="text-center pb-4 pt-4 font-semibold text-lg">Move map and view marker info on hover</h3>
    <img class="mx-auto rounded-lg" src="/gifs/mapbox/hover.gif" width="600" alt="DShift Login" />
    <h3 class="text-center pb-4 pt-4 font-semibold text-lg">Toggle sidebar menu with list of places</h3>
    <img class="mx-auto rounded-lg" src="/gifs/mapbox/toggle.gif" width="600" alt="DShift Login" />
    <h3 class="text-center pb-4 pt-4 font-semibold text-lg">Filter places on the list and map</h3>
    <img class="mx-auto rounded-lg" src="/gifs/mapbox/filter.gif" width="600" alt="DShift Login" />
    <h2 class="font-main text-3xl text-center py-4 font-semibold">Links</h2>
    <div class="text-center">
      <a href="https://github.com/BirdyArt/Chingu" class="text-xl mr-5 font-main font-semibold hover:opacity-50" target="_blank">Github</a>
      <a href="https://birdyart.github.io/Chingu/" class="text-xl font-main font-semibold hover:opacity-50" target="_blank">Live</a>
    </div>
    <div class="text-center md:hidden">
      <button class="bg-gray-600 rounded px-3 py-2 mt-6 text-white font-mapbox md:font-sans group-hover:font-mapbox focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-opacity-50"
        on:click={() => (open = false)}>Cancel
      </button>
    </div>
  </div>
</ModalBox>