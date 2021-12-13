import GUN from 'gun';
import 'gun/sea';
import 'gun/axe';
import { writable } from 'svelte/store';
import { goto } from '$app/navigation';

// Database
export const db = GUN('https://gun-manhattan.herokuapp.com/gun');

// Gun User
export const user = db.user().recall({ sessionStorage: true });

// Current User's username
export const username = writable('');

user.get('alias').on((v) => username.set(v));

db.on('auth', async (event) => {
	const alias = await user.get('alias'); // username string
	username.set(alias);
	const pub = await user.get('pub');

	console.log(`signed in as ${alias}`);
	console.log(await user.get('pub'));
	goto(`/${pub}`);
});
