/** @type {import('tailwindcss').Config} */
export const content = [
    "./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
    extend: {
        fontFamily: {
            rancho: ['"Rancho"', 'cursive'],
            raleway: ['"Raleway"', 'sans-serif'],
        },
        colors: {
            // custom colors example
            brand: {
                DEFAULT: "#E3B577", // main brand color
            },
        },
    },
};
export const plugins = [];
