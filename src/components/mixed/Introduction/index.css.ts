import { style } from '@vanilla-extract/css'
import { fontSize } from 'src/utils/style/fontSize'
import { gradientBackground } from 'src/utils/style/gradientBackground.css'
import { mobile, pc } from 'src/utils/style/mediaQuery'

export const container = style({
  width: '100%',
  height: 'calc(100svh + 120px)',
  overflow: 'hidden',
  boxSizing: 'border-box',
  position: 'relative',
  marginBottom: -96,
  '@media': {
    [mobile]: {
      padding: '48px 24px',
    },
    [pc]: {
      padding: '72px 72px 192px',
    },
  },
})

export const linkPanel = style({
  width: 'fit-content',
})

export const title = style({
  marginBottom: 48,
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
  ...gradientBackground,
  '@media': {
    [mobile]: {
      fontSize: fontSize.second,
    },
    [pc]: {
      fontSize: fontSize.first,
    },
  },
})
