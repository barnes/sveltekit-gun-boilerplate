<script>
	import '../app.css';
	import { user } from '../user.js';
	import '../global.css';
	import Header from '../components/Header.svelte';
</script>

<div class="container mx-auto my-5">
	<Header />
	<div class="bg-base-200 rounded-box p-5">
		<slot />
	</div>
</div>
