import { useEffect, useState } from 'react'
import DynamicTitle from 'src/components/bit/DynamicTitle'
import { color } from 'src/utils/style/color'
import {
  animatedContainer,
  articleContainer,
  articleInnerContainer,
  articleTitleContainer,
  container,
  descriptionContaier,
  slideInBottom,
  thumbnail,
  titleContainer,
  upperContainer,
} from './index.css'
import BeltedText from 'src/components/bit/BeltedText'
import blankArticle from 'src/assets/blankArticle.png'
import { timingFunciton } from 'src/utils/style/timingFunction'
import InScreenTrigger from 'src/components/bit/InScreenTrigger'

type Article = {
  title: string
  thumbnail: string
  description: string
  link: string
}

const Articles = () => {
  const [articles, setArticles] = useState<Article[]>([])
  useEffect(() => {
    fetch('/api/articles.php')
      .then((res) => res.json())
      .then((data) => {
        setArticles(data)
        console.log(data)
      })
  }, [])

  return (
    <div>
      <div className={titleContainer}>
        <DynamicTitle
          title="Articles"
          backgroundText={'ARTICLES '.repeat(10)}
          textColor={color.white}
        />
      </div>
      <div className={container}>
        {articles.map((article, index) => {
          const descriptionDom = new DOMParser().parseFromString(
            article.description,
            'text/html'
          )
          return (
            <a
              href={article.link}
              target="_blank"
              rel="noreferrer"
              className={articleContainer}
              key={index}
            >
              <InScreenTrigger
                onEnter={(trigger) => {
                  if (trigger.firstChild)
                    (
                      trigger.firstChild as HTMLElement
                    ).style.animation = `${slideInBottom} 0.9s ${
                      index * 0.1
                    }s ${timingFunciton.easeOut} both`
                }}
              >
                <div
                  className={[articleInnerContainer, animatedContainer].join(
                    ' '
                  )}
                >
                  <div className={upperContainer}>
                    <img
                      src={article.thumbnail ?? blankArticle}
                      className={thumbnail}
                    />
                    <div className={articleTitleContainer}>
                      <BeltedText
                        text={article.title}
                        textColor={color.black}
                        beltColor={color.white}
                      />
                    </div>
                  </div>
                  <div className={descriptionContaier}>
                    {descriptionDom.documentElement.textContent}
                  </div>
                </div>
              </InScreenTrigger>
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default Articles
