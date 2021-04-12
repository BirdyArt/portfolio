<script>
	export let open = false
</script>

<button class="text-black md:hidden hover:text-black-700 cursor-pointer mr-4 border-none focus:outline-none" class:open on:click={() => open = !open}>
	<svg width=32 height=32>
		<line id="top" x1=0 y1=6  x2=32 y2=6/>
		<line id="middle" x1=0 y1=16 x2=32 y2=16/>
		<line id="bottom" x1=0 y1=26 x2=32 y2=26/>
	</svg>
</button>

<style>
	svg {
		min-height: 32px;
		transition: transform 0.3s ease-in-out;
	}
	
	svg line {
		stroke: currentColor;
		stroke-width: 3;
		transition: transform 0.3s ease-in-out
	}
	
	button {
		z-index: 20;
	}
	
	.open #top {
		transform: translate(10px, 0px) rotate(45deg)
	}
	
	.open #middle {
		opacity: 0;
	}
	
  .open #bottom {
		transform: translate(-12px, 9px) rotate(-45deg)
	}
</style>