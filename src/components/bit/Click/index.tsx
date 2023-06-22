export type ClickProps = {
  onClick: () => void
  children: React.ReactNode
}

const Click: React.FC<ClickProps> = (props) => {
  const { onClick } = props

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    onClick()
  }
  return (
    <a onClick={handleClick} href="./">
      {props.children}
    </a>
  )
}

export default Click
