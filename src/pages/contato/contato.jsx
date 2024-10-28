import React from 'react'
import contatoBg from '../../assets/contato-bg.jpg'
import '../contato/contato.css'
import Button from '../../components/button/button'

const contato = () => {
  return (
    <div className='comentario-box' style={{backgroundImage: `url(${contatoBg})`}}>
      <form>
        <h1>Contate-nos</h1>
        <div>
          <input type="text"  placeholder='Seu nome'/>
        </div>
        <div>
          <input type="text" placeholder='Seu email'/>
        </div>
        <div>
          <input type="text" placeholder='Assunto'/>
        </div>
        <div>
          <textarea name="mensagem" cols="30" rows="10" placeholder='Sua mensagem'></textarea>
        </div>
        <Button name={'Enviar'}></Button>
      </form>
    </div>
  )
}

export default contato