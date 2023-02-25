/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                btnNormal: "rgba(24, 154, 180, 0.75)",
                btnActive: "rgba(73, 176, 183, 0.75)",
            },
        },
    },
    plugins: [],
};
