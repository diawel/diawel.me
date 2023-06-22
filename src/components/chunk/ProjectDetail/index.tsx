import ProjectDescription from 'src/components/bit/ProjectDescription'
import ProjectLinks, { ProjectLinkType } from 'src/components/bit/ProjectLinks'
import ProjectPhrase from 'src/components/bit/ProjectPhrase'
import ProjectThumbnail from 'src/components/bit/ProjectThumbnail'
import { container, textContainer } from './index.css'

export type ProjectDetailProps = {
  thumbnail: string
  phrase: string
  description: string
  links: ProjectLinkType[]
}

const ProjectDetail: React.FC<ProjectDetailProps> = (props) => {
  const { thumbnail, phrase, description, links } = props
  return (
    <div className={container}>
      <ProjectThumbnail src={thumbnail} />
      <div className={textContainer}>
        <ProjectPhrase text={phrase} />
        <ProjectDescription text={description} />
        <ProjectLinks links={links} />
      </div>
    </div>
  )
}

export default ProjectDetail
