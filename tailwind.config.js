/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            container: {
                center: true,
                padding: "1rem",
            },
            fontFamily: {
                sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
                title: ["Alfa Slab One", ...defaultTheme.fontFamily.sans],
                banner: ["Montserrat", ...defaultTheme.fontFamily.sans],
                rubbik: ["Rubik", ...defaultTheme.fontFamily.sans],
            }
        },
    },
    plugins: [],
}