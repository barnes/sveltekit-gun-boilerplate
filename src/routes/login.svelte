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
<div class="p-4 m-4">
	<label for="username">Username</label>
	<input name="username" bind:value={username} minlength="3" maxlength="16" type="text" />
</div>


<div class="p-4 m-4">
	<label for="password">Password</label>
	<input name="password" bind:value={password} type="password" />
</div>


<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" on:click={login}>Login</button>
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" on:click={signup}>Sign Up</button>


  