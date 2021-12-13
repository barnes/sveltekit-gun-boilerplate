<script>
	import { onMount } from 'svelte';

	import { user } from '../user';

	let tasks = [];
	let task
	let edit = false;


	onMount(() => {
		user
			.get('tasks')
			.map()
			.once(async (data, id) => {
				if (data) {
					tasks = [...tasks, [id, data]];
					console.log(tasks);
				}
			});
	});

	async function deleteTask(taskId) {
		console.log('attempting delete')
		await user.get('tasks').get(taskId).put(null)
		tasks = []
		user
			.get('tasks')
			.map()
			.once(async (data, id) => {
				if (data) {
					tasks = [...tasks, [id, data]];
				}
			});
		console.log('Deleted ' + taskId )
		edit = false;
	}

	async function toggleEditTask(taskId) {
		task = await user.get('tasks').get(taskId)
		console.log(task[1]);
		edit = true;
	}

	async function editTask(taskId) {
		let editTask = task[1];
		await user.get('tasks').get(taskId).set(editTask);
		edit = false;
		console.log(tasks);
	}
</script>

<h1>TaskList</h1>
{#each tasks as task}
	{#if edit}
		<input type="text" bind:value={task[1]}>
		<button on:click={deleteTask(task[0])}>X</button>
		<button on:click={editTask(task[0])}>save</button>
	{:else}
		<p on:click={toggleEditTask(task[0])} style="cursor:pointer">{task[1]} : {task[0]}</p>
	{/if}
{/each}

