import TextWithIcon from '../../bit/TextWithIcon'
import { container } from './index.css'
import twitter from 'src/assets/serviceIcon/twitter.svg'
import github from 'src/assets/serviceIcon/github.svg'
import note from 'src/assets/serviceIcon/note.svg'
import youtube from 'src/assets/serviceIcon/youtube.svg'
import instagram from 'src/assets/serviceIcon/instagram.svg'
import { sofiaPro } from 'src/utils/style/textStyle.css'

const linkSnippets = [
  {
    url: 'https://twitter.com/satelliteon',
    iconUrl: twitter,
    text: 'satelliteon',
  },
  { url: 'https://github.com/diawel', iconUrl: github, text: 'diawel' },
  { url: 'https://note.com/diawel', iconUrl: note, text: 'diawel' },
  {
    url: 'https://www.youtube.com/channel/UCWn0Qs-bCi7F3p2u2453Rog',
    iconUrl: youtube,
    text: 'Diawel',
  },
  {
    url: 'https://www.instagram.com/diaw_el/',
    iconUrl: instagram,
    text: 'diaw_el',
  },
]

const SnsLinks = () => {
  return (
    <div className={container}>
      {linkSnippets.map((linkSnippet) => {
        return (
          <a
            href={linkSnippet.url}
            target="_blank"
            rel="noreferrer"
            key={linkSnippet.url}
          >
            <TextWithIcon
              iconUrl={linkSnippet.iconUrl}
              text={linkSnippet.text}
              textStyle={sofiaPro}
            />
          </a>
        )
      })}
    </div>
  )
}

export default SnsLinks
