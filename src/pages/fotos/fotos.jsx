import React from 'react'
import Galeria from '../../components/galeria/galeria'
import '../fotos/fotos.css'

import foto1 from '../../assets/fotos/foto1.jpg'
import foto2 from '../../assets/fotos/foto2.jpg'
import foto3 from '../../assets/fotos/foto3.jpeg'
import foto4 from '../../assets/fotos/foto4.jpg'
import foto5 from '../../assets/fotos/foto5.jpg'
import foto6 from '../../assets/fotos/foto6.jpg'
import foto7 from '../../assets/fotos/foto7.png'
import foto8 from '../../assets/fotos/foto8.jpg'
import foto9 from '../../assets/fotos/foto9.jpg'

const fotos = () => {
  return (
    <div className='container-fotos'>
      <div>Galeria</div>
      <div className='container-galeria'>
        <Galeria img={foto1}></Galeria>
        <Galeria img={foto2}></Galeria>
        <Galeria img={foto3}></Galeria>
        <Galeria img={foto4}></Galeria>
        <Galeria img={foto5}></Galeria>
        <Galeria img={foto6}></Galeria>
        <Galeria img={foto7}></Galeria>
        <Galeria img={foto8}></Galeria>
        <Galeria img={foto9}></Galeria>
      </div>
    </div>

  )
}

export default fotos