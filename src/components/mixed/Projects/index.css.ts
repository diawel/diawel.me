import { keyframes, style } from '@vanilla-extract/css'
import { mobile, pc } from 'src/utils/style/mediaQuery'

export const container = style({
  width: '100%',
  boxSizing: 'border-box',
  display: 'flex',
  animation: `${keyframes({
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  })} 0.6s 0.3s backwards`,
  '@media': {
    [mobile]: {
      padding: 24,
      flexDirection: 'column',
      gap: 18,
    },
    [pc]: {
      padding: 72,
      justifyContent: 'center',
      gap: 64,
    },
  },
})

export const detailContainer = style({
  position: 'relative',
  transition: 'height 0.3s 0.15s',
})
