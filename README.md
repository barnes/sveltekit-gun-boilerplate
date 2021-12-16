# Sveltekit / GUN Boilerplate

This project is a dead simple CRUD example app using GUN as a backend. Users can create an account, and create, delete and edit 'tasks'.

# TODO

- Getting the tasks out of the DB is challening. Currently I'm getting the data, but parsing down to data for Svelte to chew on is proving challenging. I'm just no expert on JS objects, spreading, etc.
- Update and Delete functions for an item.
- Would like a modal popover for edit / create / delete. Click an existing task to pull open the same modal used to submit the task.

# 12/13/2021

CRUD is mostly functional, but some goofy bugs occuring.

- new task appearing many times
- edits replacing the string with an object

I want to rewrite the TaskList component from scratch, trying to replace my janky array use with objects.

...TaskListNew has fixed many of the issues, but created some new ones.

- How to allow editing multiple at the same time, or only allow editing of one at a time.

# 12/13/2021 Evening

TailwindCSS is now installed and functioning. Now it's time to learn Tailwind and get it all put together, looking nice.

# 12/15/2021 Evening

Tailwind / DaisyUI are set up but still seem bizarely challenging. Going to keep learning the ropes,but it looks better already.

Need to refactor the auth side of things. The user page should pass the current user down to components.

Need to refactor the way data is handled, trying to integrate Svelte stores more tightly as outlined in the GUN docs.
