/** @type {import('tailwindcss').Config} */
const config = {
    content: ["./src/**/*.{html,js}",
        "./index.html"
    ],
    theme: {
        extend: {
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
            },
        },
    },
    plugins: [],
};

export default config;
