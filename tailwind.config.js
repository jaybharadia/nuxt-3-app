/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: [],
    theme: {
        extend: {
            fontFamily: {
                body: ["SF UI Display Medium", ...defaultTheme.fontFamily.sans],
                display: ["Geometric", ...defaultTheme.fontFamily.sans],
                gil: ["Gil", ...defaultTheme.fontFamily.sans],
            },
            aspectRatio: {
                "4/3": "4 / 3",
            },
            colors: {
                primary: {
                    50: "#CEEAFE",
                    100: "#CEEAFE",
                    200: "#9ED1FE",
                    300: "#6DB4FE",
                    400: "#4999FD",
                    500: "#0D6EFD",
                    600: "#0955D9",
                    700: "#063FB6",
                    800: "#042C92",
                    900: "#021F79",
                },
                secondary: {
                    50: "#FFEDD4",
                    100: "#FFEDD4",
                    200: "#FFD6A9",
                    300: "#FFB97E",
                    400: "#FF9E5E",
                    500: "#FF7029",
                    600: "#DB501D",
                    700: "#B73514",
                    800: "#931F0D",
                    900: "#7A1007",
                },
            },
        },
    },
    plugins: [],
};
