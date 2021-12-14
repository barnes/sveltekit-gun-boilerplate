<script>
	import { user, username } from '../user';
	let task;

	async function createTask() {
		await user.get('tasks').set(task);
		task = '';
	}

	function handleKeydown(event) {
		if (event.key == "Enter") {
			createTask();
		}
	}
</script>

<svelte:window on:keydown={handleKeydown}/>

<div class="max-w-sm rounded overflow-hidden shadow-sm mx-auto">
	<div class=" py-4">
		<p class="p-2 mx:auto text-center italic text-sm">Press enter to submit your task. Click a task to edit or delete.</p>
		<input placeholder="enter a new task" class="w-full" type="text" bind:value={task}/>
	</div>
</div>


