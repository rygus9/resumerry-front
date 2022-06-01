module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        deepPurple: "#B284EC",
        lightPurple: "#C1A0EB",
        deepBlack: "#232323",
        black: "#454545",
        lightBlack: "#787878",
        deepGray: "#a1a1a1",
        gray: "#cdcdcd",
        lightGray: "#efefef",
      },
      backgroundImage: {
        "question-image": "url('../public/img/background/question.png')",
        "resume-image": "url('../public/img/background/resume.png')",
        "main-image": "url('../public/img/background/main.png')",
      },
      fontFamily: {
        DoHyean: ["Do Hyeon", "sans-serif"],
        NotoSans: ["Noto Sans KR", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
