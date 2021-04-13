<script>
	import Hamburger from '$lib/nav/Hamburger.svelte'
	
	export let sidebar = false
</script>

<header class="p-2 md:ml-16 lg:ml-24 md:p-0 md:fixed">
	<nav class="flex justify-between md:mt-20">
    <img
      src="/logo.svg"
      alt="BirdyArt logo"
      class="h-16"
    />
		<Hamburger bind:open={sidebar}/>
	</nav>
  <a class="hidden md:block ml-1 mb-3 mt-4 text-xl" href="#about">Home</a>
  <a class="hidden md:block ml-1 mb-3 text-xl" href="#about">Works</a>
  <a class="hidden md:block ml-1 mb-3 text-xl" href="#about">About</a>
</header>
