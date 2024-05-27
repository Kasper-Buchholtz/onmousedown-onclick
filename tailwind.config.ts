import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lavender : "#C9A9EA",
        flamingo : "#EABEEE",
        primary : "#3BE086",
        purple: "#7B61FF",
        dark: "#242B31",
        light: "#FCFCFC",
        grey: "#AFB7BD",
      }
    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
  ],
};
export default config;
