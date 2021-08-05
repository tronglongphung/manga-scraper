module.exports = {
  darkMode: false, // or 'media' or 'class'
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
  purge: {
    content: ['./pages/**/*.tsx', './components/**/*.tsx'],
    // These options are passed through directly to PurgeCSS
  },
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
  plugins: [],
  future: {
    purgeLayersByDefault: true,
  },
};
