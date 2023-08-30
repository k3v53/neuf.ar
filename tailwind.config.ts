import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			animation: {
				'up-and-down': 'up-and-down 3s infinite',
				'pulse-cursor': 'pulse-cursor 3s infinite',
			},
			keyframes: {
				'up-and-down': {
					'0%, 100%': { transform: 'translateY(5px)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'pulse-cursor': {
					'0%, 100%': { opacity: '0' },
					'50%': { opacity: '1' },
				},
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			width: { '144': '36rem' },
		},
		colors: {
			primary: '#2cd5c4',
			secondary: '#005b4e',
			accent: '#e8f3f1',
			contrast: '#545479',
			black: '#000',
		},
	},
	plugins: [],
};
export default config;
