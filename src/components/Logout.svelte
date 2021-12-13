<script>
	import { username, user } from '../user';
	import { goto } from '$app/navigation';

	function logout() {
		user.leave();
		username.set('');
		goto('/login');
	}
</script>

<button class="logout" on:click={logout}>Logout</button>
