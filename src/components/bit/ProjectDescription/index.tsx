import { description } from './index.css'

export type ProjectDescriptionProps = {
  text: string
}

const ProjectDescription: React.FC<ProjectDescriptionProps> = (props) => {
  const { text } = props
  return <div className={description}>{text}</div>
}

export default ProjectDescription
