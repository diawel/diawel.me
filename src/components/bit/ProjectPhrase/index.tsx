import { phrase } from './index.css'

export type ProjectPhraseProps = {
  text: string
}

const ProjectPhrase: React.FC<ProjectPhraseProps> = (props) => {
  const { text } = props
  return <div className={phrase}>{text}</div>
}

export default ProjectPhrase
