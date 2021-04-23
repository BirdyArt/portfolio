<script>
import ModalBox from "$lib/ModalBox.svelte";
export let open = false;
let clickOutside = true;
</script>

<ModalBox bind:open {clickOutside}>
  <div class="p-12 bg-yellow-100">
    <h1 class="text-5xl text-center pb-3 font-semibold">LibraryCard</h1>
    <p class="py-2">LibraryCard is a responsive web app aimed at helping users to build a library of cards with places, people, memories, or anything you can imagine. Then they can navigate their personal collection and find the name of that cool ramen place downtown anytime, anywhere.</p>
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
  </div>
</ModalBox>