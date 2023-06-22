import { globalStyle } from '@vanilla-extract/css'
import { color } from './utils/style/color'

globalStyle('*', {
  fontFamily: 'sans-serif',
  fontWeight: 400,
  zIndex: 100,
})

globalStyle('body', {
  margin: 0,
  backgroundColor: color.white,
  color: color.black,
})

globalStyle('a', {
  textDecoration: 'none',
  color: 'inherit',
  width: 'fit-content',
})
