<script>
	import Navbar from '$lib/navbar/Navbar.svelte'
	import Sidebar from '$lib/navbar/Sidebar.svelte'

	let open = false
</script>

<Sidebar bind:open/>
<Navbar bind:sidebar={open}/>
