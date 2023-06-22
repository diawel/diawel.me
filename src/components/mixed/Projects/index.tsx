import { useLayoutEffect, useRef, useState } from 'react'
import ProjectSelector from 'src/components/chunk/ProjectSelector'
import { container, detailContainer } from './index.css'
import ProjectDetail from 'src/components/chunk/ProjectDetail'
import ToggledContainer from 'src/components/bit/ToggledContainer'
import { projects } from './projects'

const Projects = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const currentDetailRef = useRef<HTMLDivElement | null>(null)
  const [currentDetailHeight, setCurrentDetailHeight] = useState(720)
  const animationFrameRef = useRef<number>()

  const animationFrame = () => {
    if (currentDetailRef.current)
      setCurrentDetailHeight(currentDetailRef.current.clientHeight)

    animationFrameRef.current = requestAnimationFrame(animationFrame)
  }

  useLayoutEffect(() => {
    animationFrame()

    return () => {
      if (animationFrameRef.current)
        cancelAnimationFrame(animationFrameRef.current)
    }
  })

  return (
    <div className={container}>
      <ProjectSelector
        projectNames={projects.map((project) => project.name)}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
      <div
        className={detailContainer}
        style={{
          height: currentDetailHeight,
        }}
      >
        {projects.map((project, index) => (
          <ToggledContainer
            shown={index == selectedIndex}
            currentContainerRef={currentDetailRef}
            key={project.name}
          >
            <ProjectDetail {...project} />
          </ToggledContainer>
        ))}
      </div>
    </div>
  )
}

export default Projects
