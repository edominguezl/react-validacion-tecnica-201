import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import ContadorClase from './ejemplo-clase/ContadorClase.tsx'
import Contador from './ejemplo-funcional/Contador.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <ContadorClase titulo='Hola Mundo' valorInicial={3}/>
    <ContadorClase titulo='Bye Bye' valorInicial={10}/> */}
    <Contador titulo='Titulo' subtitulo='Subtitulo'/>
  </StrictMode>
)
