/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	corePlugins: {
		preflight: false,
	},
	theme: {
		extend: {
			colors: {
				'theme-yellow': '#FFA500',
				'neutral-creme': '#FFF1D9',
				'neutral-dark': '#1C2024',
				'theme-grey': '#23262A',
			},
		},
		fontFamily: {
			text: ['Plus Jakarta Sans', 'sans-serif'],
			heading: ['Montagu Slab', 'serif'],
		},
	},
	plugins: [],
};

