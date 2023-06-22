import { style } from '@vanilla-extract/css'
import { fontSize } from 'src/utils/style/fontSize'
import { mobile, pc } from 'src/utils/style/mediaQuery'

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8em',
  '@media': {
    [mobile]: {
      fontSize: fontSize.regular,
    },
    [pc]: {
      fontSize: fontSize.medium,
    },
  },
})
