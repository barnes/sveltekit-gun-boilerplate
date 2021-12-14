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

<div class="flex flex-wrap">
    {#each tasks as task, i (task.id)}
    <div class="bg-white w-64 rounded overflow-hidden shadow-sm mx-auto my-1" on:click={toggleEditTask(i)}>
    <div class="px-6 h-18 py-4 max-h-sm">
        {#if task.edit}
                    <input class="w-full font-bold text-xl mb-2" type="text" bind:value={editTaskContent}> <br />
                    <button on:click={deleteTask(i)}>X</button>
                    <button on:click={editTask(i)}>save</button>	
        {:else}
            <div class="font-bold text-xl mb-2">{task.data}</div>
            <button on:click={deleteTask(i)}>X</button>
        {/if}
    </div>
    </div>
    {/each}
</div>


