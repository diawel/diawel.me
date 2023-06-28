import { style } from '@vanilla-extract/css'
import { mobile, pc } from 'src/utils/style/mediaQuery'

export const kv = style({
  position: 'absolute',
  right: -24,
  width: '80%',
  maxWidth: '80svh',
  zIndex: 0,
  '@media': {
    [mobile]: {
      bottom: 72,
    },
    [pc]: {
      bottom: 128,
    },
  },
})
