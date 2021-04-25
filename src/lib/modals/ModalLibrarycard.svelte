<script>
import ModalBox from "$lib/ModalBox.svelte";
export let open = false;
let clickOutside = true;
</script>

<ModalBox bind:open {clickOutside}>
  <div class="p-6 md:p-12 bg-yellow-100">
    <h1 class="text-5xl text-center pb-3 font-semibold">LibraryCard</h1>
    <p class="py-2">LibraryCard is a responsive web app aimed at helping users to build a library of cards with places, people, memories, or anything you can imagine. Then they can navigate their personal collection and find the name of that cool ramen place downtown anytime, anywhere.</p>
    <h2 class="font-main text-3xl text-center py-2 font-semibold">What it can do?</h2>
    <h3 class="text-center pb-4 pt-4 font-semibold text-lg">Register and login + Google auth</h3>
    <img class="mx-auto rounded-lg" src="/gifs/librarycard/login.gif" width="600" alt="DShift Login" />
    <h3 class="text-center pb-4 pt-8 font-semibold text-lg">Add, edit, delete cards</h3>
    <img class="mx-auto rounded-lg" src="/gifs/librarycard/addcards.gif" width="600" alt="Add employees" />
    <h3 class="text-center pb-4 pt-8 font-semibold">You can upload you own icon or use Iconfinder API</h3>
    <img class="mx-auto rounded-lg" src="/gifs/librarycard/iconfinder.gif" width="600" alt="Add shifts" />
     <h3 class="text-center pb-4 pt-8 font-semibold">Fully responsive</h3>
    <img class="mx-auto rounded-lg" src="/gifs/librarycard/responsive.gif" width="600" alt="Add shifts" />
    <h2 class="font-main text-3xl text-center py-4 font-semibold">Links</h2>
    <div class="text-center">
      <a href="https://www.figma.com/file/VvrSD3QSfE2aUvb3GUqJaj/Library-Card-App" class="text-xl font-main font-semibold hover:opacity-50" target="_blank">Design</a>
      <a href="https://github.com/BirdyArt/LibraryCard" class="text-xl mx-5 font-main font-semibold hover:opacity-50" target="_blank">Github</a>
      <a href="https://library-card.netlify.app/" class="text-xl font-main font-semibold hover:opacity-50" target="_blank">Live</a>
    </div>
    <div class="text-center md:hidden">
      <button class="bg-green-600 rounded px-3 py-2 mt-6 text-white font-normal focus:outline-none focus:ring-4 focus:ring-green-600 focus:ring-opacity-50"
        on:click={() => (open = false)}>Cancel
      </button>
    </div>
  </div>
</ModalBox>