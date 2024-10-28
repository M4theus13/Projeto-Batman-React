import React from 'react'
import './card.css'

const card = ({name, actor, img}) => {
  return (
    <div className='card' style={{backgroundImage: `url(${img})`}}>
      <p>{name} - {actor}</p>
    </div>
  )
}

export default card