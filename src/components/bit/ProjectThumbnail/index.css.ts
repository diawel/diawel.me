import { style } from '@vanilla-extract/css'
import { color } from 'src/utils/style/color'

export const thumbnail = style({
  width: '100%',
  boxShadow: `0px 4px 128px ${color.shadow}`,
})
