<script>
import ModalBox from "$lib/ModalBox.svelte";
export let open = false;
let clickOutside = true;
</script>

<ModalBox bind:open {clickOutside}>
  <div class="p-6 md:p-12 bg-blue-100">
    <h1 class="font-ashfaq text-5xl text-center pb-3">AshfaqIshaq</h1>
    <p class="py-2">Landing page that was created for International Child Art Foundation (ICAF) founder - Ashfaq Ishaq. It showcases his new book "Anti-Children" and serves as media addition to book itself - visitors can navigate to certain chapter and view artwork, videos and other book-related content.</p>
    <h2 class="font-main text-3xl text-center py-2 font-semibold">How it looks like?</h2>
    <img class="mx-auto rounded-lg" src="/gifs/ashfaq/show.gif" width="600" alt="Responsive" />
    <div class="text-center md:hidden">
      <button class=" bg-blue-600 rounded px-3 py-2 my-3 text-white font-main2 md:font-sans group-hover:font-main2 focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
        on:click={() => (open = false)}>Cancel
      </button>
    </div>
  </div>
</ModalBox>