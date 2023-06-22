import { keyframes, style } from '@vanilla-extract/css'

export const container = style({
  position: 'absolute',
  width: '100%',
  opacity: 0,
})

export const show = keyframes({
  '0%': {
    opacity: 0,
    top: 8,
  },
  '100%': {
    opacity: 1,
    top: 0,
  },
})

export const hide = keyframes({
  '0%': {
    opacity: 1,
    top: 0,
  },
  '100%': {
    opacity: 0,
    top: -8,
  },
})

export const widthSpacer = style({
  overflow: 'hidden',
  height: 0,
})
