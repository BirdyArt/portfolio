<script>
	import Header from '$lib/main/Header.svelte'
	import Works from '$lib/main/Works.svelte';
	import Navbar from '$lib/nav/Navbar.svelte'
	import Sidebar from '$lib/nav/Sidebar.svelte'

	let open = false;
</script>

<Sidebar bind:open/>
<Navbar bind:sidebar={open}/>
<Header />
<Works />