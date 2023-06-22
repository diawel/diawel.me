import Introduction from 'src/components/mixed/Introduction'
import Projects from 'src/components/mixed/Projects'
import { container } from './index.css'
import Footer from 'src/components/mixed/Footer'

const Portfolio = () => {
  return (
    <div className={container}>
      <Introduction />
      <Projects />
      <Footer />
    </div>
  )
}

export default Portfolio
