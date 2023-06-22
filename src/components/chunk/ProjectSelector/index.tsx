import Click from 'src/components/bit/Click'
import ToggleText from 'src/components/bit/ToggledText'
import { sofiaPro } from 'src/utils/style/textStyle.css'
import { container } from './index.css'

export type ProjectSelectorProps = {
  projectNames: string[]
  selectedIndex: number
  setSelectedIndex: (index: number) => void
}

const ProjectSelector: React.FC<ProjectSelectorProps> = (props) => {
  const { projectNames, selectedIndex, setSelectedIndex } = props
  return (
    <div className={container}>
      {projectNames.map((projectName, index) => {
        return (
          <Click key={projectName} onClick={() => setSelectedIndex(index)}>
            <ToggleText
              text={projectName}
              highlighted={index == selectedIndex}
              textStyle={sofiaPro}
            />
          </Click>
        )
      })}
    </div>
  )
}

export default ProjectSelector
