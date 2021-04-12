<script>
	import Hamburger from '$lib/navbar/Hamburger.svelte'
	
	export let sidebar = false
</script>

<header class="p-2">
	<nav class="flex justify-between md:mt-20 md:ml-20">
    <img
      src="/logo.svg"
      alt="BirdyArt logo"
      class="h-16"
    />
		<Hamburger bind:open={sidebar}/>
	</nav>
</header>

<main class="">
	<a class="hidden md:block ml-24 mb-3 text-xl" href="#about">Home</a>
  <a class="hidden md:block ml-24 mb-3 text-xl" href="#about">Works</a>
  <a class="hidden md:block ml-24 mb-3 text-xl" href="#about">About</a>
</main>