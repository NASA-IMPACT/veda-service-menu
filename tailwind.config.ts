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
        surface: "var(--surface)",
        background: "var(--background)",
        "surface-muted": "var(--surface-muted)",
        foreground: "var(--foreground)",
        "foreground-muted": "var(--foreground-muted)",
        "foreground-subtle": "var(--foreground-subtle)",
        border: "var(--border)",
        "border-strong": "var(--border-strong)",
        primary: {
          DEFAULT: "var(--primary)",
          hover: "var(--primary-hover)",
          contrast: "var(--primary-contrast)",
          soft: "var(--primary-soft)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          hover: "var(--accent-hover)",
        },
        danger: "var(--danger)",
        success: "var(--success)",
        focus: "var(--focus-ring)",
      },
      fontFamily: {
        display: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-public-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-dm-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      borderRadius: {
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
