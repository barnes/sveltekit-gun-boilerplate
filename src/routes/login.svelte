<script>
	import { user } from '../user';
	let username;
	let password;
	let loginErr;
	let signupErr;
	import { goto } from '$app/navigation';
	function login() {
		user.auth(username, password, ({ err }) => {
			if (err) {
				//alert(err);
				username = '';
				password = '';
				loginErr = err;
			} else {
				goto(`/${username}`);
			}
		});
	}
	function signup() {
		user.create(username, password, ({ err }) => {
			if (err) {
				//alert(err);
				signupErr = err;
				username = '';
				password = '';
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
	<label class="label">
		<span class="label-text">{loginErr ? loginErr : ''}</span>
		<span class="label-text">{signupErr ? signupErr : ''}</span>
	</label>
	<input
		type="text"
		placeholder="username"
		bind:value={username}
		class="input my-2 text-base-content"
	/>
	<input
		type="password"
		placeholder="username"
		bind:value={password}
		class="input my-2 text-base-content"
	/>
	<button class="btn btn-primary my-4" on:click={login}>Login</button>
	<button class="btn btn-secondary" on:click={signup}>Sign Up</button>
</div>
