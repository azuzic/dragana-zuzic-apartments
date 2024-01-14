/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
	theme: {
        extend: {
			screens: {
				xs: "480px",
				md2: "860px",
				"3xl": "1680px",
			},
			dropShadow: {
				DZ1n: "1px 1px 0px rgb(30, 41, 59)",
				DZ1: "1px 1px 1px rgb(30, 41, 59)",
				DZ1s: "1px 1px 2px rgb(30, 41, 59)",
				DZ2n: "2px 2px 1px rgb(30, 41, 59)",
				DZ2: "2px 2px 2px rgb(30, 41, 59)",
				DZ2s: "2px 2px 3px rgb(30, 41, 59)",
				DZ3n: "3px 3px 2px rgb(30, 41, 59)",
				DZ3: "3px 3px 3px rgb(30, 41, 59)",
				DZ3s: "3px 3px 4px rgb(30, 41, 59)",
			},
			borderWidth: {
				3: "3px",
			},
            colors: {
            }
        },
    },
    plugins: [
        require("tailwind-scrollbar")({ nocompatible: true }),
    ],
};
