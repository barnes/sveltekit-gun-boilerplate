<script>
	import { onMount } from 'svelte';

	import { user } from '../user';

	let tasks = [];
	let taskObject = {};

	onMount(() => {
		user
			.get('tasks')
			.map()
			.once(async (data, id) => {
				if (data) {
					let newTask = { id, data };
					console.log(newTask);
					tasks = [...tasks, data];
					taskObject = {
						...newTask,
						...taskObject
					};
				}
			});
	});

	function deleteTask() {}
</script>

<h1>TaskList</h1>
{#each tasks as task}
	<p on:click={deleteTask} style="cursor: pointer">{task}</p>
{/each}
