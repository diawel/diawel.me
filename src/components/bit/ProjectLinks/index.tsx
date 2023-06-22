import { anchor, container } from './index.css'

export type ProjectLinkType = { url: string; text: string }

export type ProjectLinksProps = {
  links: ProjectLinkType[]
}

const ProjectLinks: React.FC<ProjectLinksProps> = (props) => {
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

export default ProjectLinks
