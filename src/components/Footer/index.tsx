import services from 'constants/services.json'
import socials from 'constants/socials.json'
import minus from 'assets/footer/minus.svg'
import plus from 'assets/footer/plus.svg'
import './index.scss'
import { useState } from 'react'

const Footer: React.FC = () => {
  const [isOpen, setOpen] = useState(-1)

  return (
    <div className='footer'>
      <div className='services'>
        {
          services.map((item, idx) => {
            return (
              <div key={idx} className='service'>
                <div className='title' onClick={() => setOpen(idx)}><p>{item.title}</p><img className='toggle' src={isOpen === idx ? minus : plus} alt='toggle' /></div>
                <div className={`links ${isOpen === idx ? 'open' : ''}`}>{
                  item.links.map((item, i) =>
                    <a href={item.link} key={i}>{item.title}</a>
                  )
                }
                </div>
              </div>
            )
          }
          )
        }
      </div>
      <div className='socials'>
        <div className='title'><p>Follow Us</p></div>
        <div className='links'>
          {
            socials.map((item, idx) => {
              const icon = require(`assets/footer/${item.title}.svg`)
              return (
                <div className="link" key={idx}>
                  <a href={item.link} key={idx}><img src={icon} alt={item.title} /></a>
                </div>
              )
            }
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Footer