<script>
  import ModalBox from "$lib/ModalBox.svelte";
  export let open = false;
  let clickOutside = true;
</script>

<ModalBox bind:open {clickOutside}>
  <div class="p-6 md:p-12 bg-indigo-100 text-indigo-500">
    <h1 class="font-dshift text-5xl text-center pb-3">DShift</h1>
    <p class="py-2">
      A blazing fast shift management web app sporting a surprisingly simple
      interface. You can schedule employees for different areas, specify working
      hours and break time. Then it could be published, and employees could
      check it using provided link.
    </p>
    <h2 class="font-main text-3xl text-center py-2 font-semibold">
      What it can do?
    </h2>
    <h3 class="text-center pb-4 pt-4 font-semibold text-lg">
      Register and login
    </h3>
    <img
      class="mx-auto rounded-lg"
      src="/gifs/dshift/dshiftlogin.gif"
      width="600"
      alt="DShift Login"
    />
    <h3 class="text-center pb-4 pt-8 font-semibold text-lg">
      Add employees quickly or fill full profile (you can view, edit, and delete
      them too)
    </h3>
    <img
      class="mx-auto rounded-lg"
      src="/gifs/dshift/addpeople.gif"
      width="600"
      alt="Add employees"
    />
    <h3 class="text-center pb-4 pt-8 font-semibold text-lg">
      Create, edit & delete shifts and areas
    </h3>
    <img
      class="mx-auto rounded-lg"
      src="/gifs/dshift/addshiftsareas.gif"
      width="600"
      alt="Add shifts"
    />
    <h3 class="text-center pb-4 pt-8 font-semibold text-lg">
      Navigate using calendar
    </h3>
    <img
      class="mx-auto rounded-lg"
      src="/gifs/dshift/calendar.gif"
      width="600"
      alt="Calendar"
    />
    <h3 class="text-center pb-4 pt-8 font-semibold text-lg">
      Publish shifts and share view link with your employees
    </h3>
    <img
      class="mx-auto rounded-lg"
      src="/gifs/dshift/publish.gif"
      width="600"
      alt="Publish"
    />
    <h3 class="text-center pb-4 pt-8 font-semibold text-lg">
      Amazingly responsive, you can work from your phone, tablet & laptop
    </h3>
    <img
      class="mx-auto rounded-lg"
      src="/gifs/dshift/responsive.gif"
      width="600"
      alt="Responsive"
    />
    <h2 class="font-main text-3xl text-center py-4 font-semibold">Links</h2>
    <div class="text-center">
      <a
        href="https://www.figma.com/file/ie28XK31rKffc59W2yViGA/DShift?node-id=0%3A1"
        class="text-xl font-main font-semibold hover:opacity-50"
        target="_blank">Design</a
      >
      <a
        href="https://github.com/chingu-voyages/v28-svelte-team-09"
        class="text-xl mx-5 font-main font-semibold hover:opacity-50"
        target="_blank">Github</a
      >
      <a
        href="https://dshift.netlify.app/"
        class="text-xl font-main font-semibold hover:opacity-50"
        target="_blank">Live</a
      >
    </div>
    <div class="text-center md:hidden">
      <button
        class="bg-indigo-500 rounded px-3 py-2 mt-6 text-white font-main focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50"
        on:click={() => (open = false)}
        >Cancel
      </button>
    </div>
  </div>
</ModalBox>
