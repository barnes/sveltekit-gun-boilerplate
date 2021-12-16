<script>
	import { user } from '../user';
	let username;
	let password;
	import { goto } from '$app/navigation';
	function login() {
		user.auth(username, password, ({ err }) => err && alert(err));
		goto(`/${username}`);
	}
	function signup() {
		user.create(username, password, ({ err }) => {
			if (err) {
				alert(err);
			} else {
				login();
			}
		});
	}
	function logout() {
		user.leave();
		username.set('');
	}
</script>

<div class="form-control w-96 mx-auto">
	<input type="text" placeholder="username" bind:value={username} class="input my-2" />
	<input type="password" placeholder="username" bind:value={password} class="input my-2" />
	<button class="btn btn-primary my-4" on:click={login}>Login</button>
	<button class="btn btn-secondary" on:click={signup}>Sign Up</button>
</div>
