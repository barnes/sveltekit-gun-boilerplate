module.exports = {
	theme: {
		extend: {}
	},

	plugins: [require('@tailwindcss/forms'), require('daisyui'), require('@tailwindcss/typography')],
	content: ['./src/**/*.{html,js,svelte,ts}']
};
