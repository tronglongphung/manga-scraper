module.exports = {
  darkMode: false, // or 'media' or 'class'
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
  purge: {
    content: ['./src/pages/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
    // These options are passed through directly to PurgeCSS
  },
  plugins: [require('@tailwindcss/forms')],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
      inset: ['checked'],
      zIndex: ['hover', 'active'],
    },
  },
  future: {
    purgeLayersByDefault: true,
  },
};
