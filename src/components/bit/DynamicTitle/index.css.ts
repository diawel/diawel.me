import { keyframes, style } from '@vanilla-extract/css'
import { fontSize } from 'src/utils/style/fontSize'
import { mobile, pc } from 'src/utils/style/mediaQuery'
import { timingFunciton } from 'src/utils/style/timingFunction'

export const container = style({
  overflow: 'hidden',
  '@media': {
    [mobile]: {
      margin: '-128px 0',
      padding: '128px 24px',
    },
    [pc]: {
      margin: '-256px 0',
      padding: '256px 72px',
    },
  },
})

export const text = style({
  position: 'relative',
  lineHeight: 1,
  whiteSpace: 'nowrap',
  '@media': {
    [mobile]: {
      fontSize: fontSize.large,
    },
    [pc]: {
      fontSize: fontSize.second,
    },
  },
})

export const background = style({
  position: 'absolute',
  top: '-0.5em',
  color: 'transparent',
  zIndex: 0,
  '@media': {
    [mobile]: {
      fontSize: 256,
    },
    [pc]: {
      fontSize: 512,
    },
  },
})

export const animatedChar = style({
  display: 'inline-block',
  animationName: 'none',
  animationTimingFunction: timingFunciton.easeOut,
  animationFillMode: 'both',
})

export const fadeIn = keyframes({
  '0%': {
    transform: 'translateY(-4px)',
    opacity: 0,
  },
  '100%': {
    transform: 'translateY(0)',
    opacity: 1,
  },
})
