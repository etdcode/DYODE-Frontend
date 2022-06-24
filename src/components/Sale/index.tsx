import hero from 'assets/sale/hero.png'
import './index.scss'


const Sale: React.FC = () => {
  return (
    <div className='sale'>
      <img src={hero} alt="hero" />
      <div className='sale-form'>
        <p className='header'>Our Favorite Tees</p>
        <p className='subheader'>Everyday tees you need.</p>
        <div className='button'>Shop Now</div>
      </div>
    </div>
  )
}

export default Sale