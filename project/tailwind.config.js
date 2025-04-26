module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "avatar-user-squareandi-lane-color-background":
          "var(--avatar-user-squareandi-lane-color-background)",
        "avatar-user-squarecandice-wu-color-background":
          "var(--avatar-user-squarecandice-wu-color-background)",
        "avatar-user-squaredemi-wilkinson-color-background":
          "var(--avatar-user-squaredemi-wilkinson-color-background)",
        "avatar-user-squaredrew-cano-color-background":
          "var(--avatar-user-squaredrew-cano-color-background)",
        "avatar-user-squarekate-morrison-color-background":
          "var(--avatar-user-squarekate-morrison-color-background)",
        "avatar-user-squarekoray-okumus-color-background":
          "var(--avatar-user-squarekoray-okumus-color-background)",
        "avatar-user-squarelana-steiner-color-background":
          "var(--avatar-user-squarelana-steiner-color-background)",
        "avatar-user-squarenatali-craig-color-background":
          "var(--avatar-user-squarenatali-craig-color-background)",
        "avatar-user-squareolivia-rhye-color-background":
          "var(--avatar-user-squareolivia-rhye-color-background)",
        "avatar-user-squareorlando-diggs-color-background":
          "var(--avatar-user-squareorlando-diggs-color-background)",
        "avatar-user-squarephoenix-baker-color-background":
          "var(--avatar-user-squarephoenix-baker-color-background)",
        basewhite: "var(--basewhite)",
        "colorsgrey-5": "var(--colorsgrey-5)",
        "error-500": "var(--error-500)",
        "gray-500": "var(--gray-500)",
        "gray-700": "var(--gray-700)",
        "primary-100": "var(--primary-100)",
        "primary-200": "var(--primary-200)",
        "primary-500": "var(--primary-500)",
        "primary-600": "var(--primary-600)",
        "primary-700": "var(--primary-700)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
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
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        "display-sm-semibold": "var(--display-sm-semibold-font-family)",
        "text-display-sm-semibold":
          "var(--text-display-sm-semibold-font-family)",
        "text-lg-semibold": "var(--text-lg-semibold-font-family)",
        "text-md-16-normal": "var(--text-md-16-normal-font-family)",
        "text-md-regular": "var(--text-md-regular-font-family)",
        "text-md-semibold": "var(--text-md-semibold-font-family)",
        "text-sm-14-normal": "var(--text-sm-14-normal-font-family)",
        "text-sm-medium": "var(--text-sm-medium-font-family)",
        "text-sm-regular": "var(--text-sm-regular-font-family)",
        "text-sm-semibold": "var(--text-sm-semibold-font-family)",
        "text-xs-medium": "var(--text-xs-medium-font-family)",
        "text-xs-semibold": "var(--text-xs-semibold-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      boxShadow: {
        "ds-3": "var(--ds-3)",
        "shadow-skim-xs": "var(--shadow-skim-xs)",
        "shadows-shadow-xs": "var(--shadows-shadow-xs)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
