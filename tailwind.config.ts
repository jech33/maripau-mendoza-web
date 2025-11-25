import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', ...defaultTheme.fontFamily.sans],
        playfairDisplay: ["PlayfairDisplay", "sans"],
        crimsonFoam: ["CrimsonFoam", "sans"],
      },
      colors: {
        "regalBlue-50": "var(--regal-blue-50)",
        "regalBlue-100": "var(--regal-blue-100)",
        "regalBlue-200": "var(--regal-blue-200)",
        "regalBlue-300": "var(--regal-blue-300)",
        "regalBlue-400": "var(--regal-blue-400)",
        "regalBlue-500": "var(--regal-blue-500)",
        "regalBlue-600": "var(--regal-blue-600)",
        "regalBlue-700": "var(--regal-blue-700)",
        "regalBlue-800": "var(--regal-blue-800)", // Base
        "regalBlue-900": "var(--regal-blue-900)",
        "regalBlue-950": "var(--regal-blue-950)",
        "sail-50": "var(--sail-50)",
        "sail-100": "var(--sail-100)",
        "sail-200": "var(--sail-200)", // Base
        "sail-300": "var(--sail-300)",
        "sail-400": "var(--sail-400)",
        "sail-500": "var(--sail-500)",
        "sail-600": "var(--sail-600)",
        "sail-700": "var(--sail-700)",
        "sail-800": "var(--sail-800)",
        "sail-900": "var(--sail-900)",
        "sail-950": "var(--sail-950)",
        beige: "var(--beige-mp)",
        ivory: "var(--ivory-mp)",

        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },

  plugins: [tailwindcssAnimate],
} satisfies Config;
