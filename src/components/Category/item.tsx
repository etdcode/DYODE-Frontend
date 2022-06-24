import './item.scss'

interface ItemProps {
  image: any
  heading: any
}

const Item: React.FC<ItemProps> = ({ image, heading }) => {
  return (
    <div className="item" >
      <div className="img" style={{ backgroundImage: `url(${image})` }} />
      <div className="heading">{heading}</div>
    </div >
  )
}

export default Item