<script>
	import { onMount } from 'svelte';
	import Hoverable from './Hoverable.svelte';
	import FaEdit from 'svelte-icons/fa/FaEdit.svelte'
	import MdEdit from 'svelte-icons/md/MdEdit.svelte'
	import Icon from 'svelte-awesome'
	import {edit, trash} from 'svelte-awesome/icons'



	import { user } from '../user';

	let tasks = [];
	let editTaskContent = '';
	let overlayBool = false;

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

	function handleMouseOver() {
		overlayBool = true;
	}
	function handleMouseOut() {
		overlayBool = false;
	}
</script>

<div class="grid grid-cols-4 gap-2">
	{#each tasks as task, i (task.id)}
	<Hoverable let:hovering={hovering}>
		<div class="card shadow-lg bg-base-100 mx-2 my-2 pb-3">
			<div class="card-body">
				<input type="checkbox" id={task.id} class="modal-toggle">
				<div class="modal">
					<div class="modal-box">
						<textarea
						class="h-24 w-full text-area card-title text-base-content"
						type="text"
						bind:value={editTaskContent}
					/>
					  <div class="modal-action">
						<label for={task.id} class="btn" on:click={editTask(i)}>Save</label>
					  </div>
					</div>
				  </div>
						<p>{task.data} -test</p>
				
					{#if hovering}
					<div class="btn-group absolute bottom-2 left-2 z-10">
						<button for={task.id} class="btn-sm btn modal-btn" on:click={toggleEditTask(i)}><Icon data={edit} scale="1" /></button>
						<button class="btn-sm btn-warning btn text-base-content" on:click={deleteTask(i)}><Icon data={trash} scale="1" /></button>
					</div>
					{/if}
			</div>
		</div>
	</Hoverable>
	{/each}
</div>
