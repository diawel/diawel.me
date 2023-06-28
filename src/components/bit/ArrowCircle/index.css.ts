import { style } from '@vanilla-extract/css'

export const container = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '50%',
  border: '1px solid',
})

export const arrow = style({
  width: '25%',
  height: '25%',
  borderStyle: 'solid',
  borderWidth: '1px 1px 0 0',
  transform: 'rotate(-45deg) translate(-18%, 18%)',
})
