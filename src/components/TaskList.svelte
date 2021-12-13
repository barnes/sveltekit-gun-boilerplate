<script>
	import { onMount } from 'svelte';

	import { user } from '../user';

	let tasks = [];


	onMount(() => {
		user
			.get('tasks')
			.map()
			.once(async (data, id) => {
				if (data) {
					tasks = [...tasks, [id, data]];
				}
			});
	});

	async function deleteTask(taskId) {
		await user.get('tasks').get(taskId).put(null)
		//tasks = tasks.filter((task) => {
			//return task[0] != taskId;
		//})
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
	}
</script>

<h1>TaskList</h1>
{#each tasks as task}
	<p on:click={deleteTask(task[0])} style="cursor: pointer">{task[1]} : {task[0]}</p>
{/each}
