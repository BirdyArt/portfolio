<script>
	export let open = false
</script>

<aside class="absolute w-1/2 h-full bg-green-800 border-r-2 shadow-lg z-10" class:open>
	<nav class="p-12 text-xl">
		<a class="block mb-3" href="#about">Home</a>
		<a class="block mb-3" href="#contact">Works</a>
		<a class="block mb-3" href="#contact">About</a>
	</nav>
</aside>

<style>
	aside {
		right: -100%;
		transition: right 0.3s ease-in-out
	}
	
	.open {
		right: 0
	}
</style>