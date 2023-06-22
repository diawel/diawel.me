import { thumbnail } from './index.css'

export type ProjectThumbnailProps = {
  src: string
}

const ProjectThumbnail: React.FC<ProjectThumbnailProps> = (props) => {
  const { src } = props
  return <img src={src} className={thumbnail} />
}

export default ProjectThumbnail
