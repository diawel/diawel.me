import { globalStyle } from '@vanilla-extract/css'
import { color } from './utils/style/color'

globalStyle('body', {
  margin: 0,
  backgroundColor: color.background,
  transition: 'background-color 0.6s',
  color: color.black,
  fontFamily: 'noto-sans-cjk-jp, sans-serif',
  fontWeight: 400,
  zIndex: 100,
  scrollBehavior: 'smooth',
})

globalStyle('a', {
  textDecoration: 'none',
  color: 'inherit',
  width: 'fit-content',
})
