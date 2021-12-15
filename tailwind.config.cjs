module.exports = {
	theme: {
		extend: {}
	},

	plugins: [require('@tailwindcss/forms'), require('daisyui')],
	content: ['./src/**/*.{html,js,svelte,ts}']
};
