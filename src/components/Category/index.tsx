import Item from './item'
import women from 'assets/category/women.png'
import men from 'assets/category/men.png'
import accessories from 'assets/category/accessories.png'
import './index.scss'

const Category: React.FC = () => {
  return (
    <div className="category">
      <Item image={women} heading="Women's" />
      <Item image={men} heading="Men's" />
      <Item image={accessories} heading="Accessories" />
    </div>
  )
}

export default Category