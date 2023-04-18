/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/{pages,components,common,layouts}/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#19225C',
			},
		},
	},
	plugins: [],
};
