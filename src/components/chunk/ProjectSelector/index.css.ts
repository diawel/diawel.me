import { style } from '@vanilla-extract/css'
import { color } from 'src/utils/style/color'
import { fontSize } from 'src/utils/style/fontSize'
import { mobile, pc } from 'src/utils/style/mediaQuery'

export const container = style({
  display: 'flex',
  gap: 16,
  fontSize: fontSize.medium,
  '@media': {
    [mobile]: {
      height: fontSize.medium,
      overflowX: 'auto',
      borderBottom: `1px solid ${color.black}`,
      paddingBottom: 16,
    },
    [pc]: {
      padding: '16px 0',
      width: 240,
      flexShrink: 0.5,
      flexDirection: 'column',
      borderRight: `1px solid ${color.black}`,
    },
  },
})
