<script>
	import { user, username } from '../user';
	import { page } from '$app/stores';
	import TaskForm from '../components/TaskForm.svelte';
	import TaskList from '../components/TaskList.svelte';

	//From the page params -> get user details and pass them down to the form and the list.
</script>

<h1 class="text-5xl text-center uppercase">{$username}</h1>
<!-- <h2>{$page.params.user}</h2> -->
<TaskForm />
<TaskList />
