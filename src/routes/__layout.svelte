<script>
	import '../app.css';
	import { user } from '../user.js';
	import '../global.css';
	import Header from '../components/Header.svelte';
</script>

<div class="container mx-auto my-5">
	<Header />
	<div class="bg-neutral-focus rounded-box p-5 text-neutral-content">
		<slot />
	</div>
</div>
