import { useState } from 'react'
import meat from 'assets/header/meat.svg'
import logo from 'assets/header/logo.png'
import loupe from 'assets/header/loupe.svg'
import user from 'assets/header/user.svg'
import cart from 'assets/header/cart.svg'

import './index.scss'

const Header: React.FC = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <div className="header">
      <div className="logo">
        <a href='#meat' className="meat" onClick={() => setOpen(!isOpen)}><img src={meat} alt="meat" width={28} height={28} /></a>
        <img className="logo-image" src={logo} alt="logo" />
      </div>
      <div className={`menu ${isOpen ? "open" : ""}`}>
        <a href='#men'>Men's</a>
        <a href='#women'>Women's</a>
        <a href='#accessories'>Accessories</a>
        <a href='#sale'>Sale!</a>
      </div>
      <div className='tool'>
        <a href='#loupe'><img src={loupe} alt="loupe" /></a>
        <a href='#user'><img src={user} alt="user" /></a>
        <a href='#cart'><img src={cart} alt="cart" /></a>
      </div>
    </div>
  )
}

export default Header