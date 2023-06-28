import { thumbnail } from './index.css'

export type ProjectThumbnailProps = {
  src: string
}

const ProjectThumbnail = (props: ProjectThumbnailProps) => {
  const { src } = props
  return <img src={src} className={thumbnail} />
}

export default ProjectThumbnail
