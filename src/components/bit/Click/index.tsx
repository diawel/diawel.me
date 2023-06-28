export type ClickProps = {
  onClick: () => void
  children: React.ReactNode
}

const Click = (props: ClickProps) => {
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
