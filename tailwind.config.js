/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                inter: "Inter",
                Lato: "Lato",
            },
            textColor: {
                Normal: "#333333",
                Primary: "#1a1a1a",
                Secondary: "#666666",
                Accent: "#ff5a60",
            },
            backgroundColor: {
                regular : "#f7f0f1"
            }
        },
    },
    plugins: [require('flowbite/plugin')],
};
