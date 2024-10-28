import React from 'react'
import '../../components/galeria/galeria.css'

const galeria = ({img}) => {
  return (
    <>
      <div className='galeria-card' style={{backgroundImage: `url(${img})`}}></div>
    </>
  )
}

export default galeria