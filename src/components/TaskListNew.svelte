<script>
	import { onMount } from 'svelte';

	import { user } from '../user';

    let tasks = []
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
                        edit:false
                    }
                    tasks = [
                        ...tasks,
                        newTask
                    ]
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
		await user.get('tasks').get(tasks[i].id).put(null)
		getDb();
	}

    //Set a particular task to edit mode
	function toggleEditTask(i) {
        console.log("toggleEdit");
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

<h1>TaskList</h1>
{#each tasks as task, i (task.id)}
    {#if task.edit}
        <input type="text" bind:value={editTaskContent}>
        <button on:click={deleteTask(i)}>X</button>
        <button on:click={editTask(i)}>save</button>
        <br />
        <br />
    {:else}
		<p on:click={toggleEditTask(i)} style="cursor:pointer">{task.id} : {task.data} : {task.edit}</p>
    {/if}
{/each}

