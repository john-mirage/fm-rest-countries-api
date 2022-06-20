/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      lg: "1312px",
    },
    colors: {
      "transparent": "transparent",
      "light-background": "hsl(0, 0%, 98%)",
      "light-surface": "hsl(0, 0%, 100%)",
      "light-element": "hsl(0, 0%, 90%)",
      "light-text": "hsl(200, 15%, 8%)",
      "light-input": "hsl(0, 0%, 52%)",
      "dark-background": "hsl(207, 26%, 17%)",
      "dark-surface": "hsl(209, 23%, 22%)",
      "dark-element": "hsl(209, 23%, 30%)",
      "dark-text": "hsl(0, 0%, 100%)",
      "dark-input": "hsl(0, 0%, 100%)",
    },
    spacing: {
      "0": "0px",
      "1": "0.0625rem",
      "2": "0.125rem",
      "4": "0.25rem",
      "5": "0.3125rem",
      "8": "0.5rem",
      "10": "0.625rem",
      "12": "0.75rem",
      "14": "0.875rem",
      "16": "1rem",
      "18": "1.125rem",
      "20": "1.25rem",
      "22": "1.375rem",
      "24": "1.5rem",
      "28": "1.75rem",
      "32": "2rem",
      "36": "2.25rem",
      "40": "2.5rem",
      "44": "2.75rem",
      "48": "3rem",
      "52": "3.25rem",
      "56": "3.5rem",
      "60": "3.75rem",
      "64": "4rem",
      "68": "4.25rem",
      "72": "4.5rem",
      "76": "4.75rem",
      "80": "5rem",
      "84": "5.25rem",
      "88": "5.5rem",
      "92": "5.75rem",
      "96": "6rem",
      "128": "8rem",
      "160": "10rem",
      "200": "12.5rem",
      "230": "14.375rem",
      "264": "16.5rem",
      "400": "25rem",
      "480": "30rem",
      "560": "35rem",
      "border-countries": "calc(100% + 0.625rem)",
    },
    fontSize: {
      "12": ["0.75rem", { lineHeight: "1" }],
      "14": ["0.875rem", { lineHeight: "1" }],
      "16": ["1rem", { lineHeight: "1" }],
      "18": ["1.125rem", { lineHeight: "1" }],
      "22": ["1.375rem", { lineHeight: "1" }],
      "24": ["1.5rem", { lineHeight: "1" }],
    },
    fontWeight: {
      "300": "300",
      "400": "400",
      "600": "600",
      "700": "700",
    },
    minWidth: {
      "96": "6rem",
    },
    minHeight: {
      "336": "21rem",
    },
    borderRadius: {
      "2": "0.125rem",
      "6": "0.375rem",
      "full": "9999px",
    },
    extend: {
      fontFamily: {
        sans: [
          'Nunito Sans',
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [],
}
