import type { Config } from 'tailwindcss'

const config: Config = {
	darkMode: ['class'],
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		screens: {
			xs: '150px', // Small phones
			sm: '640px', // Small phones
			md: '768px', // Medium phones
			lg: '1024px', // Large phones
			xl: '1280px', // Extra large phones
			'2xl': '1440px', // Small tablets and larger
			'3xl': '1920px', // Medium tablets and larger
			'4xl': '2560px', // Large tablets and larger
			'5xl': '3840px', // Desktops and larger
		},
		fontFamily: {
			def: ['var(--inter)', 'serif'],
			monument: ['var(--monument)', 'serif'],
			gilory: ['var(--gilory)', 'serif'],
		},
		extend: {
			backgroundImage: {
				noise: "url('https://arc.net/noise-light.png')",
			},
			colors: {
				light: {
					DEFAULT: '#FFFFFF',
					200: '#EFEFEF',
				},
				accent: {
					DEFAULT: '#f5b754',
					100: '#efeae5',
				},
				dark: {
					100: '#636363',
					200: '#15191d',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
}
export default config
