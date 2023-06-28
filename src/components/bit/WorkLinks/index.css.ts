import { style } from '@vanilla-extract/css'
import { fontSize } from 'src/utils/style/fontSize'

export const container = style({
  display: 'flex',
  flexWrap: 'wrap',
})

export const anchor = style({
  textDecoration: 'underline',
  fontWeight: 'bold',
  fontSize: fontSize.regular,
  margin: '0 16px 4px 0',
})
