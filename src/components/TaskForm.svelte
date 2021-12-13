<script>
	import { user, username } from '../user';
	let task;

	async function createTask() {
		await user.get('tasks').set(task);
		task = '';
	}
</script>

<input type="text" bind:value={task} />
<button on:click={createTask}>Add</button>
