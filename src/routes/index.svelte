<script>
	import Navbar from '$lib/nav/Navbar.svelte'
	import Sidebar from '$lib/nav/Sidebar.svelte'

	let open = false
</script>

<Sidebar bind:open/>
<Navbar bind:sidebar={open}/>
