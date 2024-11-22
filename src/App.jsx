import './App.css'
import Header from './components/header/header'
import Footer from './components/footer/footer'

import './pages/home/home.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home/home'
import Contato from './pages/contato/contato'
import Fotos from './pages/fotos/fotos'
import Comentarios from './pages/comentarios/comentarios'

function App() {

  return (
    <>

        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path='/Projeto-Batman-React' element={<Home />}></Route> 
            <Route path='/Contato' element={<Contato />}></Route> 
            <Route path='/Fotos' element={<Fotos />}></Route> 
            <Route path='/Comentarios' element={<Comentarios />}></Route> 
          </Routes>
          <Footer></Footer>  
        </BrowserRouter>

    </>
  )
}

export default App
