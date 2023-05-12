/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        theme1: {
          bg: {
            main: "hsl(222, 26%, 31%)",
            toggle: "hsl(223, 31%, 20%)",
            screen: "hsl(224, 36%, 15%)",
          },
          keys: {
            "bg-blue": "hsl(225, 21%, 49%)",
            "shadow-blue": "hsl(224, 28%, 35%)",
            "toggle-red": "hsl(6, 63%, 50%)",
            "shadow-red": "hsl(6, 70%, 34%)",
            "bg-orange": "hsl(30, 25%, 89%)",
            "shadow-orange": "hsl(28, 16%, 65%)",
          },
          text: {
            blue: "hsl(221, 14%, 31%)",
            white: "hsl(0, 0%, 100%)",
          },
        },
        theme2: {
          bg: {
            main: "hsl(0, 0%, 90%)",
            toggle: "hsl(0, 5%, 81%)",
            screen: "hsl(0, 0%, 93%)",
          },
          keys: {
            "bg-cyan": "hsl(185, 42%, 37%)",
            "shadow-cyan": "hsl(185, 58%, 25%)",
            "toggle-orange": "hsl(25, 98%, 40%)",
            "toggle-shadow-orange": "hsl(25, 99%, 27%)",
            "bg-yellow": "hsl(45, 7%, 89%)",
            "shadow-orange": "hsl(35, 11%, 61%)",
          },
          text: {
            yellow: "hsl(60, 10%, 19%)",
            white: "hsl(0, 0%, 100%)",
          },
        },
        theme3: {
          bg: {
            main: "hsl(268, 75%, 9%)",
            toggle: "hsl(268, 71%, 12%)",
            screen: "hsl(268, 71%, 12%)",
          },
          keys: {
            "bg-violet": "hsl(281, 89%, 26%)",
            "shadow-violet": "hsl(285, 91%, 52%)",
            "toggle-cyan": "hsl(176, 100%, 44%)",
            "shadow-cyan": "hsl(177, 92%, 70%)",
            "bg-yellow": "hsl(268, 47%, 21%)",
            "shadow-orange": "hsl(290, 70%, 36%)",
          },
          text: {
            yellow: "hsl(52, 100%, 62%)",
            blue: "hsl(198, 20%, 13%)",
            white: "hsl(0, 0%, 100%)",
          },
        },
      },
    },
  },
  plugins: [],
};
