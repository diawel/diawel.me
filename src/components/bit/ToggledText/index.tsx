import { useRef } from 'react'
import {
  container,
  highlight,
  highlightedText,
  highlightedTextContainer,
  unhighlight,
} from './index.css'

export type ToggleTextProps = {
  text: string
  highlighted: boolean
  textStyle?: string
}

const ToggleText = (props: ToggleTextProps) => {
  const { text, highlighted, textStyle } = props
  const haveHighlighted = useRef(false)

  let animation
  if (highlighted) {
    animation = `${highlight} 0.3s 0.15s forwards`
    haveHighlighted.current = true
  } else if (haveHighlighted.current) animation = `${unhighlight} 0.3s`

  const styledText = <span className={textStyle}>{text}</span>
  return (
    <div className={container}>
      {styledText}
      <div
        className={highlightedTextContainer}
        style={{
          animation: animation,
        }}
      >
        <div className={highlightedText}>{styledText}</div>
      </div>
    </div>
  )
}

export default ToggleText
