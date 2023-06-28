import { color } from 'src/utils/style/color'
import { arrow, container } from './index.css'

const derections = {
  Up: 0,
  Right: 90,
  Down: 180,
  Left: 270,
}

export type ArrowCircleProps = {
  direction: keyof typeof derections
  size: number
  borderColor?: string
}

const ArrowCircle = (props: ArrowCircleProps) => {
  const { direction, size, borderColor } = props
  return (
    <div
      style={{
        transform: `rotate(${derections[direction]}deg)`,
        width: size,
        height: size,
        borderColor: borderColor ?? color.black,
      }}
      className={container}
    >
      <div
        style={{ borderColor: borderColor ?? color.black }}
        className={arrow}
      />
    </div>
  )
}

export default ArrowCircle
