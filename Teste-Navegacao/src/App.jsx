import './App.css'

import Home from './Layout/Home.jsx'
import AntigosApp from './JavaScr/AntigosApp.jsx'
import SeminovoApp from './JavaScr/SeminovoApp.jsx'
import Login from  './DadosPessoais/Login.jsx'
import Signin from './DadosPessoais/Signin.jsx'
import MeusDados from './DadosPessoais/MeusDados.jsx'
import CarroEscolhido from './JavaScr/CarroEscolhido.jsx'
import ChatCarro from './JavaScr/ChatCarro.jsx'
import {Routes, Route} from 'react-router-dom'
export default function App() {
  if(1==1)
  {
    return(
      <>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Antigos" element={<AntigosApp />} />
          <Route path="/Seminovos" element={<SeminovoApp/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Signin" element={<Signin/>} />
          <Route path="/MeusDados" element={<MeusDados/>} />
          <Route path="/Carro" element={<CarroEscolhido/>} />
           <Route path="/Carro/ChatCarro" element={<ChatCarro/>} />
        </Routes>
      </>
    )
  }

}
