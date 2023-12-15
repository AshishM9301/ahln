/** @type {import('tailwindcss').Config} */

import { fontFamily } from "tailwindcss/defaultTheme";

export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    serif: ["Playfair Display", ...fontFamily.sans],
    sans: ["Poppins", ...fontFamily.sans],
  },
};
export const plugins = [];
