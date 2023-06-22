import gsap from 'gsap'
import { kv, parallaxPosition } from './index.css'
import icon from 'src/assets/icon.webp'
import { useLayoutEffect } from 'react'

const AnimatedKv = () => {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(`.${kv}`, {
        bottom: parallaxPosition.to,
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return <img className={kv} src={icon} />
}

export default AnimatedKv
