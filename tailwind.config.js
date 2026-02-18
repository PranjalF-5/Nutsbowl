/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                nutribowl: {
                    dark: '#2A231E',  // Dark brown text from body
                    cream: '#F3EFE7', // Light background
                    gold: '#C5A059',  // Gold accent from SVG
                    brown: '#997B40', // Darker gold/brown
                }
            },
            fontFamily: {
                sans: ['"Geist"', '"Inter"', 'sans-serif'],
                serif: ['"Playfair Display"', 'serif'],
            }
        },
    },
    plugins: [],
}
