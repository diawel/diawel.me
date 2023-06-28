import { useLayoutEffect, useRef } from 'react'

export type ScrollTriggerProps = {
  children?: React.ReactNode
  onEnter?: (trigger: HTMLElement) => void
  onLeave?: (trigger: HTMLElement) => void
}

const InScreenTrigger = (props: ScrollTriggerProps) => {
  const { children, onEnter, onLeave } = props
  const containerRef = useRef<HTMLDivElement>(null)
  const animationFrameRef = useRef<number>()
  const inScreenRef = useRef(false)

  const animationFrame = () => {
    if (containerRef.current) {
      const clientRect = containerRef.current.getBoundingClientRect()
      if (clientRect.top < window.innerHeight && clientRect.bottom > 0) {
        if (!inScreenRef.current && onEnter) onEnter(containerRef.current)
        inScreenRef.current = true
      } else {
        if (inScreenRef.current && onLeave) onLeave(containerRef.current)
        inScreenRef.current = false
      }
    }

    animationFrameRef.current = requestAnimationFrame(animationFrame)
  }

  useLayoutEffect(() => {
    animationFrame()

    return () => {
      if (animationFrameRef.current)
        cancelAnimationFrame(animationFrameRef.current)
    }
  })

  return <div ref={containerRef}>{children}</div>
}

export default InScreenTrigger
