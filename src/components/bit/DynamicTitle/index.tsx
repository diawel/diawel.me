import { sofiaPro } from 'src/utils/style/textStyle.css'
import { animatedChar, background, container, fadeIn, text } from './index.css'
import { color } from 'src/utils/style/color'
import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import InScreenTrigger from '../InScreenTrigger'

export type DynamicTitleProps = {
  title: string
  backgroundText: string
  textColor?: string
}

const DynamicTitle = (props: DynamicTitleProps) => {
  const { title, textColor, backgroundText } = props
  const backgroundRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(backgroundRef.current, {
        left: '-5em',
        ease: 'none',
        scrollTrigger: {
          trigger: backgroundRef.current,
          scrub: 0,
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className={container}>
      <div
        className={[text, sofiaPro].join(' ')}
        style={{ color: textColor ?? color.black }}
      >
        <InScreenTrigger
          onEnter={(trigger) => {
            ;(Array.from(trigger.children) as HTMLElement[]).forEach(
              (child) => {
                child.style.animationName = fadeIn
              }
            )
          }}
        >
          {title.split('').map((char, index) => {
            return (
              <span
                key={index}
                style={{
                  animationDuration: `${0.5 + (title.length - index) * 0.1}s`,
                  animationDelay: `${0.1 + index * 0.1}s`,
                }}
                className={animatedChar}
              >
                {char}
              </span>
            )
          })}
        </InScreenTrigger>
        <div style={{ position: 'absolute', width: '100%' }}>
          <div
            className={background}
            style={{
              WebkitTextStroke: `1px ${textColor ?? color.black}`,
              left: -120,
            }}
            ref={backgroundRef}
          >
            {backgroundText}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DynamicTitle
