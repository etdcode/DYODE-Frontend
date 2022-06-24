import product from 'constants/product.json'
import { useEffect, useState } from 'react'
import './index.scss'

const Product: React.FC = () => {
  const products: any[] = []
  product.forEach(item => {
    const img = require(`assets/product/${item.image === (null || '') ? 'default.png' : item.image}`)
    products.push({ title: item.title, description: item.description, price: item.price, image: img })
  })

  const [moveClass, setMoveClass] = useState('');
  const [carouselItems, setCarouselItems] = useState(products);

  useEffect(() => {
    document.documentElement.style.setProperty('--num', carouselItems.length.toString());
  }, [carouselItems])

  const handleAnimationEnd = () => {
    if (moveClass === 'prev') {
      shiftNext([...carouselItems]);
    } else if (moveClass === 'next') {
      shiftPrev([...carouselItems]);
    }
    setMoveClass('')
  }

  const shiftPrev = (copy) => {
    let lastcard = copy.pop();
    copy.splice(0, 0, lastcard);
    setCarouselItems(copy);
  }

  const shiftNext = (copy) => {
    let firstcard = copy.shift();
    copy.splice(copy.length, 0, firstcard);
    setCarouselItems(copy);
  }


  return (
    <div className="product">
      <div className='header'>Shop New Arrivals</div>
      <div className="carouselwrapper module-wrapper">
        <div className="ui">
          <button onClick={() => setMoveClass('next')} className="prev">
            <svg width="23" height="42" viewBox="0 0 23 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.795637 22.1525L20.2219 41.525C20.8584 42.1594 21.8888 42.1583 22.5242 41.5218C23.1592 40.8853 23.1575 39.8542 22.521 39.2194L4.25102 20.9999L22.5216 2.78053C23.1581 2.14561 23.1597 1.11522 22.5249 0.478661C22.2064 0.159561 21.7891 7.73526e-06 21.3718 7.77174e-06C20.9556 7.80813e-06 20.5399 0.158493 20.222 0.47538L0.795637 19.8474C0.489088 20.1524 0.317066 20.5675 0.317066 20.9999C0.317066 21.4324 0.48958 21.847 0.795637 22.1525Z" fill="black" />
            </svg>
          </button>
          <button onClick={() => setMoveClass('prev')} className="next">
            <svg width="23" height="42" viewBox="0 0 23 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.2044 19.8475L2.77812 0.47495C2.14164 -0.159395 1.11117 -0.158329 0.475761 0.478231C-0.159158 1.11471 -0.157518 2.14576 0.479042 2.78059L18.749 21.0001L0.478386 39.2195C-0.158092 39.8544 -0.159733 40.8848 0.475104 41.5213C0.793631 41.8404 1.21092 42 1.62821 42C2.04444 42 2.46009 41.8415 2.77804 41.5246L22.2044 22.1526C22.5109 21.8476 22.6829 21.4325 22.6829 21.0001C22.6829 20.5676 22.5104 20.153 22.2044 19.8475Z" fill="black" />
            </svg>
          </button>
        </div>
        <ul onAnimationEnd={handleAnimationEnd} className={`${moveClass} carousel`}>
          {carouselItems.map((step, idx) =>
            <li key={idx} className='product-item card'>
              <img className='product-image' src={step.image} alt="product" />
              <div className='product-title'>{step.title}</div>
              <div className='product-subtitle'>{step.description}</div>
              <div className='product-price'>{step.price}</div>
            </li>
          )}
        </ul>
      </div>
    </div >
  )
}

export default Product;