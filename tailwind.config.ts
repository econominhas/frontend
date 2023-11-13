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
					accent: "#f4f4f4",
					neutral: "#3855F5",
					"neutral-content": "#ffffff",
					"base-100": "#ffffff",
					"base-content": "#333333",
					".bg-content": {
						backgroundColor: "#333333",
					},
					".bg-content-t": {
						backgroundColor: "#33333380",
					},
					".text-content-t": {
						color: "#33333380",
					},
					".btn-google": {
						"background-color": "#ffffff",
						border: "1px solid #747775",
					},
					".btn-google:hover": {
						"background-color": "#30303008",
					},
					".bg-gray": {
						backgroundColor: "#DCDCDC",
					},
					".bg-shadow": {
						backgroundColor: "#00000080",
					},
					".date-picker": {
						"> .react-datetime-picker__wrapper": {
							border: "none !important",
						},
						".react-datetime-picker__clear-button": {
							display: "none",
						},
					},
				},
			},
		],
	},
};