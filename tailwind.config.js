const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    darkMode: "class",
    plugins: [
        nextui({
            themes: {
                light: {
                    layout: {},
                    colors: {
                        primary: '#154D5A',
                        // foreground: '#FFFFFF',
                        secondary: '#ECAA56',
                    }
                },
                dark: {
                    layout: {},
                    colors: {}
                },
                // ... custom themes
            },
        }),
    ],
}
