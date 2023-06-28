import { color } from 'src/utils/style/color'

export type BeltedTextProps = {
  text: string
  textColor?: string
  beltColor?: string
}

const BeltedText = (props: BeltedTextProps) => {
  const { text, textColor, beltColor } = props
  return (
    <div style={{ color: textColor ?? color.white }}>
      <span
        style={{
          background: beltColor ?? color.black,
        }}
      >
        {text}
      </span>
    </div>
  )
}

export default BeltedText
