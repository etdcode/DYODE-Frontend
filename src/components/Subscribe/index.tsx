import mail from 'assets/subscribe/mail.svg'
import './index.scss'

const Subscribe: React.FC = () => {
  return (
    <div className='subscribe'>
      <div className='title'><img src={mail} alt="mail" />Sign Up &amp; Stay Connected</div>
      <div className='content'>
        <p className='description'>Sign up for the newsletter and get 20% off! Gain access to exclusive offers and be the first to know when new stuff drops!</p>
        <div className='form'>
          <input placeholder='Enter Your Email Address'/>
          <div className='subscribe-button'>Subscribe</div>
        </div>
      </div>
    </div>
  )
}

export default Subscribe