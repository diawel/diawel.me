import { keyframes, style } from '@vanilla-extract/css'
import { mobile, pc } from 'src/utils/style/mediaQuery'
import { timingFunciton } from 'src/utils/style/timingFunction'

const fadeIn = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateY(24px)',
  },
  '100%': {
    opacity: 1,
    transform: 'translateY(0)',
  },
})

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  animation: `${fadeIn} 0.9s 0.3s ${timingFunciton.easeOut} both`,
  '@media': {
    [mobile]: {
      gap: '25vh',
    },
    [pc]: {
      gap: '50vh',
    },
  },
})
