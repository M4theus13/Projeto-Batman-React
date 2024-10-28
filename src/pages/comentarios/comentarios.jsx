import React from 'react'
import '../comentarios/comentarios.css'
import Review from '../../components/review/review'
import comentarioBg from '../../assets/comentarios-bg.jpg'

const comentarios = () => {
  return (
    <div className='comentario-container' style={{backgroundImage: `url(${comentarioBg})`}}>
      <Review name={'geosmaia'} text={'Incrível! Esse filme superou todas as minhas expectativas. A interpretação do protagonista foi incrível e a trama envolvendo a luta contra a sociedade secreta The Court of Owls foi emocionante e surpreendente. Definitivamente um dos melhores filmes de super-heróis que já vi.'} star={'★★★★☆'}></Review>
      <Review name={'leomir_ndias'} text={'O filme do Batman de 2022 foi uma experiência incrível! A trama envolvendo a luta contra a sociedade secreta The Court of Owls foi muito bem construída e me deixou ansioso para saber o que ia acontecer a seguir. As cenas de ação foram muito bem coreografadas e a fotografia do filme estava espetacular. Com certeza vale a pena assistir no cinema!'} star={'★★★★☆'}></Review>
      <Review name={'ana.amaral2004'} text={'Muito bom, mas eu senti que a atuação dos coadjuvantes deixou a desejar em algumas cenas. Apesar disso, a trama foi bem desenvolvida e as cenas de ação foram impressionantes.'} star={'★★★★☆'}></Review>
    </div>
  )
}

export default comentarios