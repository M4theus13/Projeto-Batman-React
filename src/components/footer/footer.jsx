import React from 'react'
import logo from '../../assets/LFB.jpg'
import './footer.css'
import { Link } from 'react-router-dom'


const footer = () => {
  return (
    <>
      <footer>
        <img id='logo-footer' src={logo} alt="logo-footer" />
        <p>Todos os direitos reservado &copy;</p>
        <p>Desenvolvido por: Matheus Garcia</p>
      </footer>
      <nav className='footer-navigation'>
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
    </>
  )
}

export default footer