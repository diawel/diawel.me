import { container, icon } from './index.css'

export type TextWithIconProps = {
  iconUrl: string
  text: string
  textStyle?: string
}

const TextWithIcon = (props: TextWithIconProps) => {
  const { iconUrl, text, textStyle } = props
  return (
    <div className={container}>
      <img src={iconUrl} className={icon} />
      <span className={textStyle}>{text}</span>
    </div>
  )
}

export default TextWithIcon
