import hero from 'constants/hero.json'
import Carousel from 'nuka-carousel'
import './index.scss'

const Hero: React.FC = () => {
  const images: any[] = []
  hero.forEach(item => {
    const img = require(`assets/hero/${item.image === null ? 'blank.png' : item.image}`);
    images.push({ image: img, title: item.title, subtitle: item.subtitle, color: item.color })
  })

  return (
    <div className="hero">
      <Carousel
        className='hero-lg'
        renderCenterLeftControls={({ previousSlide }) => (<></>)}
        renderCenterRightControls={({ nextSlide }) => (<></>)}
        autoplay={true}
        easing={"easeQuadInOut"}
        wrapAround={true}
        zoomScale={0.1}
        dragging={false}
        withoutControls={true}
        defaultControlsConfig={{
          pagingDotsStyle: {
            fill: "white",
            scale: 300,
          }
        }}
      >
        {images.map((step, idx) =>
          <div key={idx} className="hero-item" style={{ backgroundImage: `url(${step.image})` }}>
            <div className="hero-content">
              <p className={`hero-title ${step.color}`}>{step.title}</p>
              <p className={`hero-subtitle ${step.color}`}>{step.subtitle}</p>
              <div className='hero-button'>Shop Now</div>
            </div>
          </div>
        )}
      </Carousel>
      <Carousel
        className='hero-md'
        renderCenterLeftControls={({ previousSlide }) => (<></>)}
        renderCenterRightControls={({ nextSlide }) => (<></>)}
        renderBottomCenterControls={() => (<></>)}
        autoplay={true}
        easing={"easeQuadInOut"}
        wrapAround={true}
        zoomScale={0.1}
        dragging={false}
      >
        {images.map((step, idx) =>
          <div key={idx} className="hero-item">
            <div className="hero-content">
              <p className={`hero-title ${step.color}`}>{step.title}</p>
              <p className={`hero-subtitle ${step.color}`}>{step.subtitle}</p>
              <div className='hero-button'>Shop Now</div>
            </div>
          </div>
        )}
      </Carousel>
    </div>
  )
}

export default Hero