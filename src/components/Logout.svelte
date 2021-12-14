<script>
	import { username, user } from '../user';
	import { goto } from '$app/navigation';

	function logout() {
		user.leave();
		username.set('');
		goto('/login');
	}
</script>
<div class="m-auto text-center">
	<button class="bg-slate-200 px-6 py-2 mb-2" on:click={logout}>Logout</button>
</div>

