
<script>
import '../app.css';
import '../tailwind.css';
	
</script>

<div class="min-h-screen flex flex-col">
  <slot />
  <footer class="text-center bg-green-800 pt-6 mt-auto">
    <div class="container mx-auto">
      <h2 class="font-logo text-white text-2xl font-medium">Here will be some logos</h2>
      <hr class="my-5 mx-28 border-yellow	border-2 rounded-full" />
      <h3 class="text-md pb-4 text-white">
        Built with ❤️ by <a
          class="hover:underline"
          href="https://github.com/BirdyArt"
          >BirdyArt</a
        >
      </h3>
    </div>
  </footer>
</div>

