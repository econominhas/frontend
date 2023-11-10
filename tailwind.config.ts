/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				default: ["roboto", "sans-serif"],
			},
		},
		screens: {
			xs: "475px",
			...defaultTheme.screens,
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				econominhas: {
					primary: "#00c9fe",
					"primary-content": "#333333",
					secondary: "#5838F5",
					"secondary-content": "#ffffff",
					accent: "#f9daf4",
					neutral: "#3855F5",
					"neutral-content": "#ffffff",
					"base-100": "#ffffff",
					"base-content": "#333333",
					".btn-discord": {
						"background-color": "#5865F2",
					},
					".btn-discord:hover": {
						"background-color": "#3442d9",
					},
					".bg-gray": {
						backgroundColor: "#DCDCDC",
					},
					".bg-content": {
						backgroundColor: "#333333",
					},
					".bg-content-t": {
						backgroundColor: "#33333380",
					},
					".text-content-t": {
						color: "#33333380",
					},
				},
			},
		],
	},
};
