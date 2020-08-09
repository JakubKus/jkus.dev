import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

Wordpress2016.overrideThemeStyles = () => ({
  'body, h1, h2, h3, h4, h5, h6, p, span, a, li, div': {
    fontFamily: 'Montserrat, sans-serif',
  },
  body: {
    color: 'rgba(255, 255, 255, 0.9)',
  },
  a: {
    color: '#98cc62',
    textDecoration: 'none',
    boxShadow: 'none',
  },
  blockquote: {
    color: 'rgba(255, 255, 255, 0.8)',
    borderColor: 'inherit',
  },
})

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
