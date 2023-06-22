import SnsLinks from 'src/components/chunk/SnsLinks'
import { container, linkPanel, title } from './index.css'
import { sofiaPro } from 'src/utils/style/textStyle.css'
import AnimatedKv from 'src/components/bit/AnimatedKv'

const Introduction = () => {
  return (
    <div className={container}>
      <div className={linkPanel}>
        <div className={[title, sofiaPro].join(' ')}>Diawel</div>
        <SnsLinks />
      </div>
      <AnimatedKv />
    </div>
  )
}

export default Introduction
