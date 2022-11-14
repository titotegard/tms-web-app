require('@/sass/overrides.scss')

export default {
  theme: {
    options: { customProperties: true },
    themes: {
      light: {
        primary: '#37A7DF',
        secondary: '#7E65AA',
        accent: '#720D5D',
        error: '#F57C00',
      },
      dark: {
        primary: '#7E65AA',
        secondary: '#E30425',
        accent: '#720D5D',
        error: '#F57C00',
      },
    },
  },
}
