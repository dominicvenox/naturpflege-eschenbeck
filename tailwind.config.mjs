/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#064E3B', // Deep Emerald (was #2F855A)
					light: '#059669',   // Rich Green
					dark: '#022C22',    // Almost Black Green
				},
				secondary: {
					DEFAULT: '#111827', // Gray-900
					light: '#374151',   // Gray-700
				},
				accent: {
					DEFAULT: '#D4AF37', // Metallic Gold
					hover: '#B8860B',   // Dark Goldenrod
					light: '#FDE68A',   // Pale Gold
				},
				surface: {
					light: '#F9FAFB', // Cool Gray 50
					muted: '#F3F4F6', // Cool Gray 100
					white: '#FFFFFF',
					dark: '#0F172A',  // Slate 900 for dark sections
				}
			},
			fontFamily: {
				sans: ['Outfit', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				display: ['Playfair Display', 'serif'], // Optional for headings if we wanted, but sticking to sans for now primarily
			},
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
	plugins: [],
}
