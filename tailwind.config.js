/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg_color: "var(--tg-background-color)",
        text_color: "var(--tg-theme-text-color)",
        hint_color: "var(--tg-theme-hint-color)",
        link_color: "var(--tg-theme-link-color)",
        button_color: "var(--tg-theme-button-color)",
        button_text_color: "var(--tg-theme-button-text-color)",
        secondary_bg_color: "var(--tg-theme-secondary-background-color)",
        destructive_text_color: "var(--tg-theme-destructive-text-color)",

        "test-bg_color": "#FFFFFF",
        "test-text_color": "#020202",
        "test-hint_color": "#8B8B8B",
        "test-link_color": "#5AC8FB",
        "test-button_color": "#5AC8FB",
        "test-button_text_color": "#FFFFFF",
        "test-secondary_bg_color": "#F3F2F8",
        "test-destructive_text_color": "#F25A5A",
      },
      screens: {
        sm: "320px",
        md: "396px",
        lg: "415px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
