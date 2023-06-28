import { keyframes, style } from '@vanilla-extract/css'
import { color } from 'src/utils/style/color'
import { fontSize } from 'src/utils/style/fontSize'
import { mobile, pc } from 'src/utils/style/mediaQuery'

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

export const detailContainer = style({
  color: color.white,
  overflowX: 'hidden',
  '@media': {
    [mobile]: {
      margin: '-128px 0',
      padding: '128px 0',
    },
    [pc]: {
      margin: '-128px 0',
      padding: '128px 72px',
    },
  },
})

export const upperContainer = style({
  position: 'relative',
  '@media': {
    [mobile]: {
      marginBottom: 24,
    },
    [pc]: {
      marginBottom: 36,
    },
  },
})

export const rightColumn = style({
  flexShrink: 0,
  '@media': {
    [mobile]: {
      width: 'calc(100% - 24px)',
      marginLeft: 24,
    },
    [pc]: {
      width: 'calc(60% + 120px)',
      maxWidth: 'calc(100% - 168px)',
      marginLeft: 'auto',
    },
  },
})

export const thumbnail = style({
  boxShadow: `0px 4px 128px ${color.shadow}`,
  objectFit: 'cover',
  aspectRatio: '2 / 1',
  width: '100%',
})

export const phraseContainer = style({
  fontWeight: 'bold',
  '@media': {
    [mobile]: {
      fontSize: fontSize.medium,
      width: 'calc(100% - 24px)',
      margin: '-24px 24px 0 0',
      position: 'relative',
      bottom: -12,
    },
    [pc]: {
      fontSize: fontSize.large,
      width: 'calc(50% + 240px)',
      position: 'absolute',
      bottom: -24,
    },
  },
})

export const lowerContainer = style({
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row-reverse',
  alignItems: 'flex-start',
  justifyContent: 'center',
})

export const description = style({
  marginBottom: 18,
})

export const pagingButtonContainer = style({
  display: 'flex',
  gap: 24,
  '@media': {
    [mobile]: {
      display: 'none',
    },
  },
})

export const pagingDotsContainer = style({
  display: 'flex',
  justifyContent: 'center',
  padding: '24px 0',
  '@media': {
    [pc]: {
      display: 'none',
    },
  },
})

export const pagingDot = style({
  width: 8,
  height: 8,
  borderRadius: '50%',
  margin: 8,
  border: `1px solid ${color.white}`,
  transition: 'background 0.3s',
})

export const animatedContainer = style({
  opacity: 0,
})

export const blurIn = keyframes({
  '0%': {
    opacity: 0,
    filter: 'blur(6px)',
    transform: 'rotateX(24deg) rotateY(-12deg) translateY(-3vw) scale(1.05)',
  },
  '100%': {
    opacity: 1,
    filter: 'blur(0)',
    transform: 'rotateX(0) rotateY(0) translateY(0) scale(1)',
  },
})

export const slideInRight = keyframes({
  '0%': {
    transform: 'translateX(24px)',
    opacity: 0,
  },
  '100%': {
    transform: 'translateX(0)',
    opacity: 1,
  },
})

export const slideInLeft = keyframes({
  '0%': {
    transform: 'translateX(-24px)',
    opacity: 0,
  },
  '100%': {
    transform: 'translateX(0)',
    opacity: 1,
  },
})
