<script>
	import '../app.css';
	import { user } from '../user.js';
	import '../global.css';
	import Header from '../components/Header.svelte';
</script>

<div class="container mx-auto my-5">
	<Header />
	<div class="bg-base-300 p-2">
		<slot />
	</div>
</div>
