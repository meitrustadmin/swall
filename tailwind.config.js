/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'yellow': '#e5e900',
        'purpple': '#351c75',
        'white': '#ffffff',
        'sky': '#38bdf8',
        'gray-100': '#f3f4f6',
        'red-600': '#dc2626'
      },
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui', 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
        'serif': ['ui-serif', 'Georgia, Cambria', "Times New Roman", 'Times', 'serif'],
        'mono': ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace'],
        'onboard': ['Brush King'],
        'default': ['Roboto']
      },
    },
  },
  plugins: [require('@tailwindcss/typography')]
}
