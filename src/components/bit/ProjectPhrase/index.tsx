import { phrase } from './index.css'

export type ProjectPhraseProps = {
  text: string
}

const ProjectPhrase = (props: ProjectPhraseProps) => {
  const { text } = props
  return <div className={phrase}>{text}</div>
}

export default ProjectPhrase
