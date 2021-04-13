<script>
	import Main from '$lib/main/Main.svelte'
	import Navbar from '$lib/nav/Navbar.svelte'
	import Sidebar from '$lib/nav/Sidebar.svelte'

	let open = false;
</script>

<Sidebar bind:open/>
<Navbar bind:sidebar={open}/>
<Main />