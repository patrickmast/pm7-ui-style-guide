// Enhancement: Updated Tailwind CSS config to include examples directory and add proper setup for ShadCN/UI components
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./examples/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // PM7 brand colors
        primary: "#1C86EF",
        border: "#D4D4D4",
      },
      borderRadius: {
        md: "6px",
      },
    },
  },
  plugins: [],
};
