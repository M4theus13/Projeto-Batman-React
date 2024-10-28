import React from 'react'
import '../../components/header/header.css'
import logo from '../../assets/LFB.jpg'
import { Link } from 'react-router-dom'

const header = () => {
  return (
    <header id='header'>
      <img id='logo' src={logo} alt="logo" />
      <nav>

        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/contato'>Contato</Link>
          </li>
          <li>
            <Link to='/fotos'>Fotos</Link>
          </li>
          <li>
            <Link to='/comentarios'>Comentários</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default header