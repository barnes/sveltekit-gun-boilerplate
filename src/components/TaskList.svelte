<script>
	import { onMount } from 'svelte';

	import { user } from '../user';

	let tasks = [];
	let editTaskContent = '';

	function getDb() {
		tasks = [];
		user
			.get('tasks')
			.map()
			.once(async (data, id) => {
				if (data) {
					let newTask = {
						id,
						data,
						edit: false
					};
					tasks = [...tasks, newTask];
				}
			});
	}

	//Go and get each task from the db.
	onMount(() => {
		getDb();
	});

	//Delete a task and re-gather tasks from the DB.
	//Maybe overkill to run this again if I can simply clean the local object...
	async function deleteTask(i) {
		await user.get('tasks').get(tasks[i].id).put(null);
		getDb();
	}

	//Set a particular task to edit mode
	function toggleEditTask(i) {
		console.log('toggleEdit');
		tasks[i].edit = !tasks[i].edit;
		editTaskContent = tasks[i].data;
	}

	async function editTask(i) {
		console.log(editTaskContent);
		await user.get('tasks').get(tasks[i].id).put(editTaskContent);
		tasks[i].edit = false;
		getDb();
	}
</script>

<div class="flex flex-wrap">
	{#each tasks as task, i (task.id)}
		<div on:click={toggleEditTask(i)} class="card shadow-lg bg-base-100 mx-2 my-2">
			<div class="flex-row items-center space-x-4 card-body">
				{#if task.edit}
					<input
						class="input card-title text-base-content"
						type="text"
						bind:value={editTaskContent}
					/>
					<br />
					<button class="btn btn-warning text-base-content" on:click={deleteTask(i)}>X</button>
					<button class="btn btn-warning text-base-content" on:click={editTask(i)}>save</button>
				{:else}
					<div class="flex-1">
						<div class="flex card-title text-base-content">{task.data}</div>
					</div>
					<div class="flex-0">
						<button class="btn btn-warning text-base-content" on:click={deleteTask(i)}>X</button>
					</div>
				{/if}
			</div>
		</div>
	{/each}
</div>
