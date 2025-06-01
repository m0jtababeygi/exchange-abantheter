import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xs: "1.2rem",     // 12px
        sm: "1.4rem",     // 14px
        base: "1.6rem",   // 16px
        lg: "1.8rem",     // 18px
        xl: "2rem",       // 20px
        "2xl": "2.4rem",  // 24px
        "3xl": "3rem",    // 30px
        "4xl": "3.6rem",  // 36px
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
