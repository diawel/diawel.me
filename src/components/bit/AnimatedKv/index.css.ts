import { style } from '@vanilla-extract/css'

export const parallaxPosition = { from: 72, to: 0 }

export const kv = style({
  position: 'absolute',
  right: -24,
  bottom: parallaxPosition.from,
  width: '80%',
  maxWidth: '80svh',
  zIndex: 0,
})
