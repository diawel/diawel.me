import React, { useRef } from 'react'
import { container, hide, show, widthSpacer } from './index.css'

export type ToggledContainerProps = {
  children: React.ReactNode
  shown: boolean
  currentContainerRef?: React.MutableRefObject<HTMLDivElement | null>
}

const ToggledContainer = (props: ToggledContainerProps) => {
  const { children, shown, currentContainerRef } = props
  const haveShown = useRef(false)

  let style
  if (shown) {
    style = { animation: `${show} 0.3s 0.15s forwards ease-out`, zIndex: 110 }
    haveShown.current = true
  } else if (haveShown.current) style = { animation: `${hide} 0.3s ease-in` }

  return (
    <>
      <div
        className={container}
        style={style}
        ref={shown ? currentContainerRef : null}
      >
        {children}
      </div>
      <div className={widthSpacer}>{children}</div>
    </>
  )
}

export default ToggledContainer
