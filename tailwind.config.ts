import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/lib/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: "var(--font-montserrat)",
        mono: "var(--font-geist-mono)",
      },
    },
  },
  plugins: [],
} satisfies Config;