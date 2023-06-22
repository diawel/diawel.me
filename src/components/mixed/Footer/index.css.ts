import { style } from '@vanilla-extract/css'
import { color } from 'src/utils/style/color'
import { fontSize } from 'src/utils/style/fontSize'
import { gradientBackground } from 'src/utils/style/gradientBackground.css'
import { mobile, pc } from 'src/utils/style/mediaQuery'

export const container = style({
  ...gradientBackground,
  '@media': {
    [mobile]: {
      padding: '36px 24px',
    },
    [pc]: {
      padding: 48,
    },
  },
})

export const title = style({
  fontSize: fontSize.medium,
  color: color.white,
})
