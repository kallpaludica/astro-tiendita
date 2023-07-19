/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ["Josefin Sans", "sans-serif"],
			serif: ["Fira Sans", "sans-serif"],
			mono: ["Fredoka One", "sans-serif"],
			fredoka: ["Fredoka", "sans-serif"],
		},
	},
	variants: {
		animation: ({ after }) => after(['motion-safe', 'motion-reduce']),
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/line-clamp'),
	],
}
