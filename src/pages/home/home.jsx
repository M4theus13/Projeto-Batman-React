import React from 'react'
import Video from '../../assets/video.mp4'
import Button from '../../components/button/button'
import Card from '../../components/card/card'

import Batman from '../../assets/batman.jpeg'
import Gato from '../../assets/mulher-gato.jpeg'
import Gordon from '../../assets/gordon.jpg'

const home = () => {
  return (
    <>
      <div id='banner'></div>
      <div id='trailer-container'>
        <div className='content'>
          <video controls className='trailer'>
            <source src={Video} />
            Seu navegador não possui suporte para videos
          </video>
          <div id='sinopse'>
            <p>Após dois anos espreitando as ruas como Batman, Bruce Wayne se encontra nas profundezas mais sombrias de Gotham City. Com poucos aliados confiáveis, o vigilante solitário se estabelece como a personificação da vingança para a população.</p>
            <Button name='Assistir no HBO Max'></Button>
          </div>
        </div>
      </div>
      <div className="actors-card-container">
        <div className='card-container'>
          <Card name={'Robert Pattison'} actor={'Batman'} img={Batman}></Card>
          <Card name={'Zoe Kravitz'} actor={'Mulher Gato'} img={Gato}></Card>
          <Card name={'Jeffrey Wright'} actor={'Gordon'} img={Gordon}></Card>
        </div>
      </div>
    </>
  )
}

export default home