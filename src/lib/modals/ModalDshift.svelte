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
    <h3 class="text-center pb-4 pt-8 font-semibold text-lg">Add employees quickly or fill full profile (you can view, edit & delete them too)</h3>
    <img class="mx-auto rounded-lg" src="/gifs/dshift/addpeople.gif" width="600" alt="Add employees" />
    <h3 class="text-center pb-4 pt-8 font-semibold">Create, edit & delete shifts and areas</h3>
    <img class="mx-auto rounded-lg" src="/gifs/dshift/addshiftsareas.gif" width="600" alt="Add shifts" />
    <h3 class="text-center pb-4 pt-8 font-semibold">Navigate using calendar</h3>
    <img class="mx-auto rounded-lg" src="/gifs/dshift/calendar.gif" width="600" alt="Calendar" />
    <h3 class="text-center pb-4 pt-8 font-semibold">Publish shifts and share view link with your employees</h3>
    <img class="mx-auto rounded-lg" src="/gifs/dshift/publish.gif" width="600" alt="Publish" />
    <h3 class="text-center pb-4 pt-8 font-semibold">Amazingly responsive, you can work from your phone, tablet & laptop</h3>
    <img class="mx-auto rounded-lg" src="/gifs/dshift/responsive.gif" width="600" alt="Responsive" />
    <div class="text-center md:hidden">
      <button class="bg-indigo-500 rounded px-3 py-2 mt-4 text-white font-main md:font-sans group-hover:font-main focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50"
        on:click={() => (open = false)}>Cancel
      </button>
    </div>
  </div>
</ModalBox>