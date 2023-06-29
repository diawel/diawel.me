import { keyframes, style } from '@vanilla-extract/css'
import { color } from 'src/utils/style/color'
import { fontSize } from 'src/utils/style/fontSize'
import { mobile, pc } from 'src/utils/style/mediaQuery'
import { timingFunciton } from 'src/utils/style/timingFunction'

export const titleContainer = style({
  '@media': {
    [mobile]: {
      padding: '24px 0',
    },
    [pc]: {
      padding: '48px 0',
    },
  },
})

export const container = style({
  overflowX: 'hidden',
  display: 'flex',
  flexWrap: 'wrap',
  '@media': {
    [pc]: {
      paddingRight: 48,
    },
  },
})

export const articleContainer = style({
  boxSizing: 'border-box',
  '@media': {
    [mobile]: {
      margin: '0 0 24px 24px',
      width: 'calc(100% / 2 - 24px)',
    },
    [pc]: {
      margin: '0 0 72px 72px',
    },
    '(min-width: 769px) and (max-width: 1280px)': {
      width: 'calc(100% / 2 - 72px)',
    },
    '(min-width: 1281px)': {
      width: 'calc(100% / 3 - 72px)',
    },
  },
})

export const articleInnerContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
  '@media': {
    [mobile]: {
      animation: `${keyframes({
        '0%': {
          transform: 'translateY(24px)',
        },
        '100%': {
          transform: 'translateY(0)',
        },
      })} 0.6s ${timingFunciton.easeInOut} both paused`,
    },
    [pc]: {
      animation: `${keyframes({
        '0%': {
          transform: 'translateY(48px)',
        },
        '100%': {
          transform: 'translateY(0)',
        },
      })} 0.6s ${timingFunciton.easeInOut} both paused`,
    },
  },
})

export const upperContainer = style({
  position: 'relative',
})

export const thumbnail = style({
  objectFit: 'cover',
  aspectRatio: '5 / 3',
  '@media': {
    [mobile]: {
      margin: '0 0 -12px 24px',
      width: 'calc(100% - 24px)',
    },
    [pc]: {
      margin: '0 0 12px 72px',
      width: 'calc(100% - 72px)',
    },
  },
})

export const articleTitleContainer = style({
  maxWidth: 360,
  fontWeight: 'bold',
  display: '-webkit-box',
  overflow: 'hidden',
  WebkitBoxOrient: 'vertical',
  '@media': {
    [mobile]: {
      fontSize: fontSize.small,
      marginRight: 24,
      WebkitLineClamp: 3,
    },
    [pc]: {
      position: 'absolute',
      left: 0,
      bottom: 0,
      fontSize: fontSize.medium,
      marginRight: 72,
      WebkitLineClamp: 2,
    },
  },
})

export const descriptionContaier = style({
  color: color.white,
  display: '-webkit-box',
  overflow: 'hidden',
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
  '@media': {
    [mobile]: {
      display: 'none',
    },
    [pc]: {
      marginLeft: 72,
    },
  },
})

export const animatedContainer = style({
  transform: 'translateY(48px)',
})
