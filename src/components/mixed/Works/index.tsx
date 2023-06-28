import DynamicTitle from 'src/components/bit/DynamicTitle'
import {
  animatedContainer,
  blurIn,
  description,
  detailContainer,
  lowerContainer,
  pagingButtonContainer,
  pagingDot,
  pagingDotsContainer,
  phraseContainer,
  rightColumn,
  slideInLeft,
  slideInRight,
  thumbnail,
  titleContainer,
  upperContainer,
} from './index.css'
import { works } from './works'
import BeltedText from 'src/components/bit/BeltedText'
import WorkLinks from 'src/components/bit/WorkLinks'
import { useLayoutEffect, useState } from 'react'
import gsap from 'gsap'
import ArrowCircle from 'src/components/bit/ArrowCircle'
import InScreenTrigger from 'src/components/bit/InScreenTrigger'
import Click from 'src/components/bit/Click'
import { useSwipeable } from 'react-swipeable'
import { timingFunciton } from 'src/utils/style/timingFunction'
import { color } from 'src/utils/style/color'

const Works = () => {
  const [selectedWorkIndex, setSelectedWorkIndex] = useState(0)
  const [animationName, setAnimationName] = useState(slideInRight)

  const increaseSelectedWorkIndex = () => {
    setSelectedWorkIndex(
      selectedWorkIndex >= works.length - 1 ? 0 : selectedWorkIndex + 1
    )
    setAnimationName(slideInRight)
  }

  const decreaseSelectedWorkIndex = () => {
    setSelectedWorkIndex(
      selectedWorkIndex == 0 ? works.length - 1 : selectedWorkIndex - 1
    )
    setAnimationName(slideInLeft)
  }

  const jumpSelectedWorkIndex = (index: number) => {
    if (index >= selectedWorkIndex) {
      setAnimationName(slideInRight)
    } else {
      setAnimationName(slideInLeft)
    }
    setSelectedWorkIndex(index)
  }

  const swipable = useSwipeable({
    onSwiped: (event) => {
      switch (event.dir) {
        case 'Left':
          increaseSelectedWorkIndex()
          break
        case 'Right':
          decreaseSelectedWorkIndex()
          break
      }
    },
  })

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(`.${phraseContainer}`, {
        bottom: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: `.${phraseContainer}`,
          scrub: 0,
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div>
      <div className={titleContainer}>
        <DynamicTitle
          title="Works"
          backgroundText={'WORKS '.repeat(10)}
          textColor={color.white}
        />
      </div>
      <div className={detailContainer} {...swipable}>
        <div className={upperContainer}>
          <div className={rightColumn}>
            {works.map((work, index) => {
              return (
                <div
                  style={{
                    display: index === selectedWorkIndex ? 'block' : 'none',
                  }}
                  key={index}
                >
                  <InScreenTrigger
                    onEnter={(trigger) => {
                      if (trigger.firstChild)
                        (
                          trigger.firstChild as HTMLElement
                        ).style.animation = `${animationName} 0.5s 0.3s ${timingFunciton.easeOut} both`
                    }}
                  >
                    <img
                      className={[thumbnail, animatedContainer].join(' ')}
                      src={work.thumbnail}
                    />
                  </InScreenTrigger>
                </div>
              )
            })}
          </div>
          <div className={phraseContainer}>
            {works.map((work, index) => {
              return (
                <div
                  style={{
                    display: index === selectedWorkIndex ? 'block' : 'none',
                  }}
                  key={index}
                >
                  <InScreenTrigger
                    onEnter={(trigger) => {
                      if (trigger.firstChild)
                        (
                          trigger.firstChild as HTMLElement
                        ).style.animation = `${blurIn} 0.8s 0.6s ${timingFunciton.easeOut} both`
                    }}
                  >
                    <div className={animatedContainer}>
                      <BeltedText
                        text={work.phrase}
                        beltColor={color.white}
                        textColor={color.black}
                      />
                    </div>
                  </InScreenTrigger>
                </div>
              )
            })}
          </div>
        </div>
        <div className={lowerContainer}>
          <div className={rightColumn}>
            {works.map((work, index) => {
              return (
                <div
                  style={{
                    display: index === selectedWorkIndex ? 'block' : 'none',
                  }}
                  key={index}
                >
                  <InScreenTrigger
                    onEnter={(trigger) => {
                      if (trigger.firstChild)
                        (
                          trigger.firstChild as HTMLElement
                        ).style.animation = `${animationName} 0.4s 0.4s ${timingFunciton.easeOut} both`
                    }}
                  >
                    <div className={animatedContainer}>
                      <div className={description}>{work.description}</div>
                      <div>
                        技術スタック
                        <ul>
                          {work.technologies.map((technology, index) => {
                            return <li key={index}>{technology}</li>
                          })}
                        </ul>
                      </div>
                      <WorkLinks links={work.links} />
                    </div>
                  </InScreenTrigger>
                </div>
              )
            })}
          </div>
          <div className={pagingButtonContainer}>
            <Click onClick={decreaseSelectedWorkIndex}>
              <ArrowCircle
                direction="Left"
                size={48}
                borderColor={color.white}
              />
            </Click>

            <Click onClick={increaseSelectedWorkIndex}>
              <ArrowCircle
                direction="Right"
                size={48}
                borderColor={color.white}
              />
            </Click>
          </div>
          <div className={pagingDotsContainer}>
            {works.map((_, index) => {
              return (
                <Click
                  onClick={() => {
                    jumpSelectedWorkIndex(index)
                  }}
                  key={index}
                >
                  <div
                    className={pagingDot}
                    style={{
                      background:
                        index === selectedWorkIndex
                          ? color.white
                          : 'transparent',
                    }}
                  />
                </Click>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Works
