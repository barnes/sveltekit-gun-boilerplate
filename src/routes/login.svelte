<script>
	import { user } from '../user';
	let username;
	let password;
	function login() {
		user.auth(username, password, ({ err }) => err && alert(err));
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

<label for="username">Username</label>
<input class="border-1" name="username" bind:value={username} minlength="3" maxlength="16" />

<label class="font-mono text-lg" for="password">Password</label>
<input name="password" bind:value={password} type="password" />

<button class="border-2 p-4 m-4" on:click={login}>Login</button>
<button class="border-2 p-4 m-4" on:click={signup}>Sign Up</button>
