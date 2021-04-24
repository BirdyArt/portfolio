<script>
import ModalBox from "$lib/ModalBox.svelte";
export let open = false;
let clickOutside = true;
</script>

<ModalBox bind:open {clickOutside}>
  <div class="p-6 md:p-12 bg-indigo-100">
    <h1 class="font-dshift text-5xl text-center pb-3">DShift</h1>
    <p class="py-2">A blazing fast shift management web app sporting a surprisingly simple interface. Built using Svelte Kit & Tailwind!</p>
    <h2 class="font-main text-3xl text-center py-2 font-semibold">What it can do?</h2>
    <h3 class="text-center pb-4 pt-4 font-semibold text-lg">Register and login</h3>
    <img class="mx-auto rounded-lg" src="/gifs/dshift/dshiftlogin.gif" width="600" alt="DShift Login" />
    <div class="text-center md:hidden">
      <button class="bg-red-500 rounded px-3 py-2 my-3 text-white font-mapbox md:font-sans group-hover:font-mapbox focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-opacity-50"
        on:click={() => (open = false)}>Cancel
      </button>
    </div>
  </div>
</ModalBox>