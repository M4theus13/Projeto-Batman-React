import React from 'react'
import '../button/button.css'

const button = ({name}) => {
  return (
    <button className='button'>{name}</button>
  )
}

export default button