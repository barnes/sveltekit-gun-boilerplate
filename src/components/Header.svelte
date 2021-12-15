<script>
	import { user } from '../user';
	export let username;
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

<div class="overflow-visible navbar mb-2 bg-base-300">
	{#if username}
		<button on:click={logout} class="btn">Logout</button>
	{:else}
		<div class="dropdown dropdown-hover">
			<div tab index="0" class="btn m-1">Login</div>
			<div tabindex="0" class="dropdown-content p2 shadow w-52">
				<p>dropdown</p>
			</div>
		</div>
	{/if}
	<div class="dropdown dropdown-end">
		<div tabindex="0" class="m-1 btn">Dropdown</div>
		<ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
			<li>
				<a>Item 1</a>
			</li>
			<li>
				<a>Item 2</a>
			</li>
			<li>
				<a>Item 3</a>
			</li>
		</ul>
	</div>
</div>
