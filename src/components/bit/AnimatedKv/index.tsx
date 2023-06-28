import gsap from 'gsap'
import { kv } from './index.css'
import icon from 'src/assets/icon.webp'
import { useLayoutEffect, useRef } from 'react'

const AnimatedKv = () => {
  const imgRef = useRef<HTMLImageElement>(null)
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(imgRef.current, {
        bottom: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: imgRef.current,
          scrub: 0,
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return <img className={kv} src={icon} ref={imgRef} />
}

export default AnimatedKv
