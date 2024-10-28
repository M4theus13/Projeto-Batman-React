import React from 'react'
import '../review/review.css'
import semFoto from '../../assets/semFoto.jpg'

const review = ({name, text, star}) => {
  return (
    <div className='review-container'>
      <img className='foto-usuario' src={semFoto} alt="sem foto" />
      <h3>{name}</h3>
      <p className='start-text'>{star}</p>
      <p className='text-review'>{text}</p>
    </div>
  )
}

export default review