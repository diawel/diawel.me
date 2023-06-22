import { style } from '@vanilla-extract/css'
import { mobile, pc } from 'src/utils/style/mediaQuery'

export const container = style({
  width: '100%',
  maxWidth: 960,
  display: 'flex',
  flexDirection: 'column',
  '@media': {
    [mobile]: {
      padding: '8px 0',
      gap: 24,
    },
    [pc]: {
      padding: '16px 0',
      gap: 36,
    },
  },
})

export const textContainer = style({
  display: 'flex',
  flexDirection: 'column',
  '@media': {
    [mobile]: {
      gap: 16,
    },
    [pc]: {
      gap: 24,
    },
  },
})
