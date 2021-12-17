<script>
	import { username, user } from '../user';
	console.log($username);
	function logout() {
		user.leave();
		username.set('');
	}
</script>

<div class="navbar mb-2 bg-base-300 bg-neutral-focus rounded-box text-neutral-content">
	<a href="/" class="flex-1 text-5xl font-bold p-5">Sveltekit / GUN Boilerplate</a>
	<div class="pr-5">
		{#if $username}
			<a class="btn btn-primary flex-none mr-2" href={$username}>Your Page</a>
			<a class="btn btn-primary flex-none" on:click={logout}>Logout</a>
		{:else}
			<a class="btn btn-primary flex-none" href="/login">Login</a>
		{/if}
	</div>
</div>
