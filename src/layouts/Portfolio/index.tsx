import Introduction from 'src/components/mixed/Introduction'
import { container } from './index.css'
import Works from 'src/components/mixed/Works'
import Articles from 'src/components/mixed/Articles'
import InScreenTrigger from 'src/components/bit/InScreenTrigger'
import { useContext, useRef } from 'react'
import { ThemeColorSetterContext } from 'src/App'
import { color } from 'src/utils/style/color'

const Portfolio = () => {
  const themeColorSetter = useContext(ThemeColorSetterContext)
  const themeColorQueue = useRef<string[]>([])
  const updateThemeColor = () => {
    if (themeColorQueue.current.length) {
      themeColorSetter(
        themeColorQueue.current[themeColorQueue.current.length - 1]
      )
    } else {
      themeColorSetter(color.background)
    }
  }
  const requestThemeColor = (color: string) => {
    themeColorQueue.current.push(color)
    updateThemeColor()
  }
  const cancelThemeColor = (color: string) => {
    themeColorQueue.current = themeColorQueue.current.filter(
      (themeColor) => themeColor != color
    )
    updateThemeColor()
  }
  return (
    <div className={container}>
      <InScreenTrigger
        onEnter={() => {
          requestThemeColor(color.background)
        }}
        onLeave={() => {
          cancelThemeColor(color.background)
        }}
      >
        <Introduction />
      </InScreenTrigger>
      <InScreenTrigger
        onEnter={() => {
          requestThemeColor(color.dark)
        }}
        onLeave={() => {
          cancelThemeColor(color.dark)
        }}
      >
        <Works />
      </InScreenTrigger>
      <InScreenTrigger
        onEnter={() => {
          requestThemeColor(color.gray)
        }}
        onLeave={() => {
          cancelThemeColor(color.gray)
        }}
      >
        <Articles />
      </InScreenTrigger>
    </div>
  )
}

export default Portfolio
