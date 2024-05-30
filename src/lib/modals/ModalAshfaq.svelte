<script>
  import ModalBox from "$lib/ModalBox.svelte";
  export let open = false;
  let clickOutside = true;
</script>

<ModalBox bind:open {clickOutside}>
  <div class="p-6 md:p-12 bg-blue-100 text-blue-600">
    <h1 class="font-ashfaq text-5xl text-center pb-3">AshfaqIshaq</h1>
    <p class="py-2">
      Landing page that was created for International Child Art Foundation
      (ICAF) founder - Ashfaq Ishaq. It showcases his new book "Anti-Children"
      and serves as media addition to book itself - visitors can navigate to
      certain chapter and view artwork, videos and other book-related content.
    </p>
    <h2 class="font-main text-3xl text-center py-2 font-semibold">
      What it can do?
    </h2>
    <h3 class="text-center pb-4 pt-4 font-semibold text-lg">
      Hero page + carousel
    </h3>
    <img
      class="mx-auto rounded-lg"
      src="/gifs/ashfaq/hero.gif"
      width="600"
      alt="hero"
    />
    <h3 class="text-center pb-4 pt-8 font-semibold text-lg">
      Sidebar navigation
    </h3>
    <img
      class="mx-auto rounded-lg"
      src="/gifs/ashfaq/sidebar.gif"
      width="600"
      alt="sidebar"
    />
    <h3 class="text-center pb-4 pt-8 font-semibold text-lg">
      Navigation animation + scroll
    </h3>
    <img
      class="mx-auto rounded-lg"
      src="/gifs/ashfaq/scroll.gif"
      width="600"
      alt="scroll"
    />
    <h3 class="text-center pb-4 pt-8 font-semibold text-lg">
      Gallery with lightbox
    </h3>
    <img
      class="mx-auto rounded-lg"
      src="/gifs/ashfaq/gallery.gif"
      width="600"
      alt="gallery"
    />
    <h2 class="font-main text-3xl text-center py-4 font-semibold">Links</h2>
    <div class="text-center">
      <a
        href="https://www.linkedin.com/in/artem-sobolev-abbb3b8b/"
        class="text-xl font-main font-semibold hover:opacity-50"
        target="_blank">Testimonial</a
      >
      <a
        href="https://github.com/BirdyArt/ICAF"
        class="text-xl mx-5 font-main font-semibold hover:opacity-50"
        target="_blank">Github</a
      >
      <a
        href="https://ashfaqishaq.netlify.app/"
        class="text-xl font-main font-semibold hover:opacity-50"
        target="_blank">Live</a
      >
    </div>
    <div class="text-center md:hidden">
      <button
        class=" bg-blue-600 rounded px-3 py-2 mt-6 text-white font-main2 md:font-sans group-hover:font-main2 focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
        on:click={() => (open = false)}
        >Cancel
      </button>
    </div>
  </div>
</ModalBox>
