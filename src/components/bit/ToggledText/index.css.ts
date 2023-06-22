import { keyframes, style } from '@vanilla-extract/css'
import { color } from 'src/utils/style/color'
import { gradientBackground } from 'src/utils/style/gradientBackground.css'

export const container = style({
  position: 'relative',
  width: 'fit-content',
  lineHeight: 0.8,
  padding: '0.1em 0',
  flexShrink: 0,
  whiteSpace: 'nowrap',
})

export const highlightedTextContainer = style({
  position: 'absolute',
  top: '0.1em',
  left: 0,
  clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
})

export const highlightedText = style({
  color: color.white,
  ...gradientBackground,
})

export const highlight = keyframes({
  '0%': {
    clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
  },
  '100%': {
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
  },
})

export const unhighlight = keyframes({
  '0%': {
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
  },
  '100%': {
    clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
  },
})
