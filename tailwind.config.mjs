/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#2F855A', // Green-600 typically
					light: '#48BB78', // Green-500
					dark: '#22543D',  // Green-800
				},
				secondary: {
					DEFAULT: '#2D3748', // Gray-800
					light: '#4A5568', // Gray-700
				},
				accent: {
					DEFAULT: '#F6E05E', // Yellow-400 for highlights/badges
					hover: '#D69E2E',
				},
				surface: {
					light: '#F7FAFC', // Gray-50
					muted: '#EDF2F7', // Gray-100
					white: '#FFFFFF',
				}
			},
			fontFamily: {
				sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
			},
			container: {
				center: true,
				padding: '1rem',
				screens: {
					sm: '600px',
					md: '728px',
					lg: '984px',
					xl: '1240px',
				},
			},
		},
	},
	plugins: [],
}
