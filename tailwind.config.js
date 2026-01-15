/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",

        primary: "hsl(var(--primary))",
        "primary-glow": "hsl(var(--primary-glow))",

        secondary: "hsl(var(--secondary))",
        muted: "hsl(var(--muted))",
        accent: "hsl(var(--accent))",

        "warm-red": "hsl(var(--warm-red))",
        sunny: "hsl(var(--sunny))",

        border: "hsl(var(--border))",
        destructive: "hsl(var(--destructive))",
      },

      backgroundImage: {
        "gradient-primary":
          "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)))",

        "gradient-warm":
          "linear-gradient(90deg, hsl(var(--warm-red)), hsl(var(--accent)), hsl(var(--sunny)))",

        "gradient-hero":
          "linear-gradient(180deg, hsla(var(--warm-red), 0.85), hsla(var(--accent), 0.85), hsla(var(--sunny), 0.85))",
      },
    },
  },
  plugins: [],
}
