<script>
import ModalBox from "$lib/ModalBox.svelte";
export let open = false;
let clickOutside = true;
</script>

<ModalBox bind:open {clickOutside}>
  <div class="p-6 md:p-12 bg-gray-200">
    <h1 class="font-viks font-semibold text-5xl text-center pb-3">ViksMetalWorks</h1>
    <p class="py-2">A blazing fast shift management web app sporting a surprisingly simple interface. Built using Svelte Kit & Tailwind!</p>
    <h2 class="font-main text-3xl text-center py-2 font-semibold">What it can do?</h2>
    <h3 class="text-center pb-4 pt-4 font-semibold text-lg">Hero page, reviews carousel, accordion, short contact form </h3>
    <img class="mx-auto rounded-lg" src="/gifs/viks/hero.gif" width="600" alt="DShift Login" />
    <h3 class="text-center pb-4 pt-8 font-semibold text-lg">Two languages, on button toggle</h3>
    <img class="mx-auto rounded-lg" src="/gifs/viks/language.gif" width="600" alt="DShift Login" />
    <h3 class="text-center pb-4 pt-8 font-semibold text-lg">Fully functioning contact form and map</h3>
    <img class="mx-auto rounded-lg" src="/gifs/viks/form.gif" width="600" alt="DShift Login" />
    <h3 class="text-center pb-4 pt-8 font-semibold text-lg">Gallery with carousel on image click</h3>
    <img class="mx-auto rounded-lg" src="/gifs/viks/gallery.gif" width="600" alt="DShift Login" />
    <h2 class="font-main text-3xl text-center py-4 font-semibold">Links</h2>
    <div class="text-center">
      <a href="https://github.com/BirdyArt/ViksMetalWorks" class="text-xl mr-5 font-main font-semibold hover:opacity-50" target="_blank">Github</a>
      <a href="https://viksmetalworks.netlify.app/" class="text-xl font-main font-semibold hover:opacity-50" target="_blank">Live</a>
    </div>
    <div class="text-center md:hidden">
      <button class="bg-red-500 rounded px-3 py-2 mt-6 text-white font-viks focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-opacity-50"
        on:click={() => (open = false)}>Cancel
      </button>
    </div>
  </div>
</ModalBox>