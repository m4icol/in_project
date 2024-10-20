/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "CS-principal-white": "hsl(30, 17, 96)",

        "CS-component-white": "hsl(0, 0, 100)",
        "CS-component-blue": "hsl(252, 38, 95)",

        "CS-text-hard-white": "hsl(0, 0, 20)",
        "CS-text-little-white": "hsl(0, 0, 60)",

        "CS-border-component": "hsl(0, 0, 75)",

        "CS-pallete-blue": "hsl(223, 89, 82)",
      },
    },
  },
  plugins: [],
};
