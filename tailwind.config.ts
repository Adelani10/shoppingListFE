import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkmodePrimary: "#15202b",
        darkmodeSec: "#1c2733",
        // darkmodeTertiary: "#1c2938",
        darkmodeTertiary: "#22303c",
        butterColor: "#FFF4E1"
      },
    },
  },
  plugins: [],
};
export default config;
