/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: false, // or 'media' or 'class' depending on your setup
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        Lexend: ["Lexend", "sans-serif"], // Add the font family
      },
      filter: {
        "blur-background": "blur(10px)",
      },
      backgroundImage: {
        "custom-gradient": `
          radial-gradient(ellipse at top, #e66465, transparent),
          radial-gradient(ellipse at bottom, #4d9f0c, transparent);
        `,
      },
    },
  },
  plugins: [],
};
