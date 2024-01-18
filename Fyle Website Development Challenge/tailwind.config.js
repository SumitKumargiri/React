/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            padding: ["last"],
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: ["corporate", "dark"],
        darkTheme: "dark",
    },
};
