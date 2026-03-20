import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          100: "#7EA4D7",
          200: "#2C85FC",
          300: "#2266C1",
          400: "#0D284C",
        },
        cyan: {
          100: "#2DEBFC",
          200: "#187D86",
          300: "#0E474C",
        },
        white: "#FFFFFF",
        gray: {
          100: "#E9EAEC",
          200: "#D3D5D9",
          300: "#93979E",
          400: "#20242C",
          500: "#16181D",
          600: "#14161A",
          700: "#101216",
          800: "#0B0C0F",
        },
      },
      fontSize: {
        "headline-hg": ["48px", { lineHeight: "1.2", fontWeight: "700" }],
        "headline-xl": ["32px", { lineHeight: "1.2", fontWeight: "700" }],
        "headline-lg": ["28px", { lineHeight: "1.2", fontWeight: "700" }],
        "headline-md": ["24px", { lineHeight: "1.2", fontWeight: "700" }],
        "headline-sm": ["20px", { lineHeight: "1.2", fontWeight: "700" }],
        "headline-xs": ["16px", { lineHeight: "1.2", fontWeight: "700" }],
        "body-md": ["16px", { lineHeight: "1.5", fontWeight: "400" }],
        "body-sm": ["14px", { lineHeight: "1.5", fontWeight: "400" }],
        "body-xs": ["12px", { lineHeight: "1.5", fontWeight: "400" }],
        "body-tag": ["12px", { lineHeight: "normal", fontWeight: "500" }],
        "action-md": ["16px", { lineHeight: "normal", fontWeight: "500" }],
        "action-sm": ["14px", { lineHeight: "normal", fontWeight: "500" }],
      },
    },
  },
  plugins: [],
}

export default config
