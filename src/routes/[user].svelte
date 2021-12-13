<script>
	import { user, username } from '../user';
	import { page } from '$app/stores';
	import Logout from '../components/Logout.svelte';
	import TaskForm from '../components/TaskForm.svelte';
	import TaskList from '../components/TaskList.svelte';
</script>

<Logout />
<h1>{$username}</h1>
<h2>{$page.params.user}</h2>
<TaskForm />
<TaskList />
