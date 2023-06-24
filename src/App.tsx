import Portfolio from './layouts/Portfolio'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { createContext, useEffect, useState } from 'react'
import { color } from './utils/style/color'

gsap.registerPlugin(ScrollTrigger)

export const ThemeColorSetterContext = createContext<(color: string) => void>(
  () => {}
)

const App = () => {
  const [themeColor, setThemeColor] = useState<string>(color.background)

  useEffect(() => {
    let meta = document.querySelector('meta[name="theme-color"]')

    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'theme-color')
      document.head.appendChild(meta)
    }

    meta.setAttribute('content', themeColor)
    document.body.style.backgroundColor = themeColor
  }, [themeColor])

  return (
    <ThemeColorSetterContext.Provider value={setThemeColor}>
      <Portfolio />
    </ThemeColorSetterContext.Provider>
  )
}

export default App
