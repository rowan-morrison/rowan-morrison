/** @type {import("tailwindcss").Config} */
module.exports = {
  darkMode: "class",        
  safelist: ["font-heading", "font-body"],   
  content: [
    "./*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
     "./lib/**/*.{js,ts,jsx,tsx}",
    "./ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        display: ["'EB Garamond'", "ui-serif"],
        heading: ["'EB Garamond'", "ui-serif"],
        title: ["'EB Garamond'", "ui-serif"],
        label: ["'EB Garamond'", "ui-serif"],
        quote: ["'EB Garamond Italic'", "ui-serif"],
        body: ["'General Sans'", "ui-sans-serif", "system-ui"],
        caption: ["'General Sans'", "ui-sans-serif", "system-ui"],
        garamond: ["'EB Garamond'", "ui-sans-serif", "system-ui"],
      },
       fontSize: {
  // Display
  displayLarge: ["3.5625rem", { lineHeight: "4rem", letterSpacing: "-0.015625rem" }], // 57px
  displayMedium: ["2.8125rem", { lineHeight: "3.25rem", letterSpacing: "0rem" }],     // 45px
  displaySmall: ["2.25rem", { lineHeight: "2.75rem", letterSpacing: "0rem" }],      // 36px

  // Heading
  headingLarge: ["2rem", { lineHeight: "2.5rem", letterSpacing: "0rem" }],          // 32px
  headingMedium: ["1.75rem", { lineHeight: "2.25rem", letterSpacing: "0rem" }],     // 28px
  headingSmall: ["1.5rem", { lineHeight: "2rem", letterSpacing: "0rem" }],          // 24px

  // Title
  titleLarge: ["1.375rem", { lineHeight: "1.75rem", letterSpacing: "0rem" }],       // 22px
  titleMedium: ["1rem", { lineHeight: "1.5rem", letterSpacing: "0.009375rem" }],   // 16px
  titleSmall: ["0.875rem", { lineHeight: "1.25rem", letterSpacing: "0.00625rem" }],// 14px

  // Label
  labelLarge: ["0.875rem", { lineHeight: "1.25rem", letterSpacing: "0.00625rem" }], // 14px
  labelMedium: ["0.75rem", { lineHeight: "1rem", letterSpacing: "0.03125rem" }],    // 12px
  labelSmall: ["0.6875rem", { lineHeight: "1rem", letterSpacing: "0.03125rem" }],   // 11px

  // Body
  bodyLarge: ["1rem", { lineHeight: "1.5rem", letterSpacing: "0.03125rem" }],       // 16px
  bodyMedium: ["0.875rem", { lineHeight: "1.25rem", letterSpacing: "0.015625rem" }],// 14px
  bodySmall: ["0.75rem", { lineHeight: "1.25rem", letterSpacing: "0.02rem" }],        // 12px

  // Caption / Overline
  caption: ["0.75rem", { lineHeight: "1rem", letterSpacing: "0.025rem" }],          // 12px
  overline: ["0.625rem", { lineHeight: "1rem", letterSpacing: "0.06375rem" }],      // 10px

  // Form Elements
  formMedium: ["0.75rem", { lineHeight: "1rem", letterSpacing: "0.025rem" }],          // 12px
  formSmall: ["0.625rem", { lineHeight: "1rem", letterSpacing: "0.015rem" }],      // 10px
},
        fontWeight: {
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      colors: {
        ash: {50: "#f5f5f5", 100: "#e0e0e0", 900: "#222222",},
        jwBlue: "#1a73e8",
        vistaBlue: "#8EA4D2",
        glaucous: "#6279B8",
        shamrockGreen: "#4C9F70",
        hookersGreen: "#496F5D",
        richBlack: "#11151C",
        ghostWhite: "#F4F4F8",
        emerald: "#69b548",
        isabelline: "#F0ECE6",
        seasalt: "#F9F9F9",
        beige: "#F5F7DC",
        babyPowder: "#F7F9F7",
        platinum: "#D8DBE2",
        roseQuartz: "#A7A2A9",
        licorice: "#261B13",
        highlight: "#4040E3",
        celadon: "#B5D99C",
        fernGreen: "#3A7D44",
        kellyGreen: "#76B041",
        calPolyGreen: "#254D32",
        vanilla: "#D0DB97",
        argentinianBlue: "#5AA9E6",
        blackOlive: "#353531",
        solidPink: "#823038",
        ashGray: "#B5C2B7",
        cambridgeBlue: "#B5CBB7",
        vermillion: "#CD4631",
        claret: "#6D1A36",
        faluRed: "#751B1E",
        cultured: "#F8F8F8",
        parchment: "#EEEBE7",
      },
    },
  },
plugins: [
  function ({ addUtilities }) {
    addUtilities({
      ".small-caps": {
        textTransform: "lowercase",
        fontVariantCaps: "small-caps",
        fontFeatureSettings: "'smcp' 1",
      },
      ".hyperlink": {
        textDecoration: "underline",
        textDecorationThickness: "0.5px",
        textUnderlineOffset: "-1",
        textDecoratonColor: "currentColor",
        transition: "all 0.2s ease",
        "&:hover": {
          opacity: "60%",
          cursor: "pointer",
        }
      },
      ".font-subheading": {
        fontFamily: "'EB Garamond Italic'",
        fontWeight: "500",
        fontSize: "0.9rem",
        lineHeight: "1.5rem",
        letterSpacing: "0.01rem"
      }
    });
  },
],
};