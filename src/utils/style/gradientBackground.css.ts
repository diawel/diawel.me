import { keyframes } from '@vanilla-extract/css'

export const gradientBackground = {
  backgroundColor: 'hsla(234,0%,19%,1)',
  backgroundImage: [
    'radial-gradient(at 40% 20%, hsla(209,97%,48%,1) 0px, transparent 50%)',
    'radial-gradient(at 80% 0%, hsla(200,99%,47%,1) 0px, transparent 50%)',
    'radial-gradient(at 0% 100%, hsla(192,100%,47%,1) 0px, transparent 50%)',
    'radial-gradient(at 80% 100%, hsla(183,95%,46%,1) 0px, transparent 50%);',
  ].join(','),
  backgroundSize: '200% 400%',
  animation: `${keyframes({
    '0%': {
      backgroundPosition: '0% 50%',
    },
    '50%': {
      backgroundPosition: '100% 50%',
    },
    '100%': {
      backgroundPosition: '0% 50%',
    },
  })} 10s ease infinite`,
}
