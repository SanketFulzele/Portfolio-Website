import React from 'react'
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const data = [
  {
    id:1, 
    image: IMG1,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com/SanketFulzele',
    demo: 'https://dribbble.com/Alien_pixels'
  },
  {
    id:2, 
    image: IMG2,
    title: 'Figma dashboard UI kit for data design web apps',
    github: 'https://github.com/SanketFulzele',
    demo: 'https://dribbble.com/shots/17845701-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id:3, 
    image: IMG3,
    title: 'Charts templates & infographics in Figma',
    github: 'https://github.com/SanketFulzele',
    demo: 'https://dribbble.com/shots/17661056-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  {
    id:4, 
    image: IMG4,
    title: 'Figma dashboard UI kit for data design web apps',
    github: 'https://github.com/SanketFulzele',
    demo: 'https://dribbble.com/shots/18432305-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  {
    id:5, 
    image: IMG5,
    title: 'Charts templates & infographics in Figma',
    github: 'https://github.com/SanketFulzele',
    demo: 'https://dribbble.com/shots/17714965-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id:6, 
    image: IMG6,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com/SanketFulzele',
    demo: 'https://dribbble.com/shots/17845674-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
]


const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {/* <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a Portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/SanketFulzele" className='btn' target='_blank'>GitHub</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article> */}

      {
        data.map(({id, image, title, github, demo}) => {
          return (
            <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className='btn' target='_blank'>GitHub</a>
              <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
          </article>
          )
        })
      }

      </div>
    </section>
  )
}

export default portfolio;
