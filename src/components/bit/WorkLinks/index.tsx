import { anchor, container } from './index.css'

export type WorkLinkType = { url: string; text: string }

export type WorkLinksProps = {
  links: WorkLinkType[]
}

const WorkLinks = (props: WorkLinksProps) => {
  const { links } = props
  return (
    <div className={container}>
      {links.map((link) => (
        <a
          href={link.url}
          key={link.url}
          className={anchor}
          target="_blank"
          rel="noreferrer"
        >
          {link.text}
        </a>
      ))}
    </div>
  )
}

export default WorkLinks
