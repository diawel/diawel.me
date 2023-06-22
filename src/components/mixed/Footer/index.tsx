import { sofiaPro } from 'src/utils/style/textStyle.css'
import { container, title } from './index.css'

const Footer = () => {
  return (
    <footer className={container}>
      <div className={[title, sofiaPro].join(' ')}>Diawel</div>
    </footer>
  )
}

export default Footer
