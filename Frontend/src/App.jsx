import './App.css'
import Home from './Layout/Home.jsx'

import AntigosApp from './JavaScr/carros/AntigosAppC.jsx'
import SeminovoApp from './JavaScr/carros/SeminovoApp.jsx'
import CarroEscolhido from './JavaScr/carros/CarroEscolhido.jsx'
import ChatCarro from './JavaScr/carros/ChatCarro.jsx'
import CriadorCarro from './JavaScr/carros/CriadorCarro'
import UpdaterCarro from './JavaScr/carros/UpdaterCarro'
import DeleterCarro from './JavaScr/carros/DeleterCarro'
import ListaAgendamentos from './JavaScr/agendamento/ListaAgendamentos.jsx'

import Login from './DadosPessoais/Login.jsx'
import Signin from './DadosPessoais/Signin.jsx'
import MeusDados from './DadosPessoais/MeusDados.jsx'

import AgendConcl from './JavaScr/agendamento/AgendConcl.jsx'
import CriadorAgenda from './JavaScr/agendamento/CriadorAgenda'
import DeletarAgenda from './JavaScr/agendamento/DeletarAgenda'
import ChecarAgendamentos from './JavaScr/agendamento/ChecarAgendamentos.jsx'
import Desagendar from './JavaScr/agendamento/Desagendar.jsx'

import FiltrosAdm from './Filtros/FiltrosAdm'


import CriadorFiltros from './Filtros/CriadorFiltros.jsx'
import UpdaterFiltros from './Filtros/UpdaterFiltros.jsx'
import DeleterFiltros from './Filtros/DeleterFiltros.jsx'
import ReaderFiltros from './Filtros/ReaderFiltros.jsx'

import DashBoard from "./JavaScr/DashBoard.jsx"

import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'

export default function App() {
  //O que estou prestes a fazer aqui com o idCarroEscolhido e uma pessima pratica em web. Nao tentem isso em casa
  //Dei uma separada ai nas rotas pra poder organizar visualmente as entidades, o que faz parte do usuário e o que é geral
  let [escolhido,idCarroEscolhido] = useState([]);
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />


          <Route path="/Antigos" element={<AntigosApp idCarro={idCarroEscolhido}/>} />
          <Route path="/Seminovos" element={<SeminovoApp idCarro={idCarroEscolhido}/>} />
          <Route path="/Carro" element={<CarroEscolhido />} />
          <Route path="/Carro/ChatCarro" element={<ChatCarro idCarro={escolhido}/>} />
          <Route path="/AgendConcl" element={<AgendConcl />} />
          <Route path="/CriadorCarro" element={<CriadorCarro />} />
          <Route path="/UpdaterCarro" element={<UpdaterCarro />} />
          <Route path="/DeleterCarro" element={<DeleterCarro />} />


          <Route path="/Login" element={<Login />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/MeusDados" element={<MeusDados />} />


          <Route path="/Agendamentos" element={<ListaAgendamentos />} />
          <Route path="/criador-agenda" element={<CriadorAgenda />} />
          <Route path="/deletar-agenda" element={<DeletarAgenda />} />
          <Route path="/checar-agenda" element={<ChecarAgendamentos />} />
          <Route path="/desagendar" element={<Desagendar />} />


          <Route path="/DashBoard" element={<DashBoard />} />


          <Route path="/filtros-adm" element={<FiltrosAdm />} />
          <Route path="/DeleterFiltro" element={<DeleterFiltros />} />
          <Route path="/UpdaterFiltro" element={<UpdaterFiltros />} />
          <Route path="/CriadorFiltro" element={<CriadorFiltros />} />
          <Route path="/ReaderFiltros" element={<ReaderFiltros />} />
        </Routes>
    </>
  )

}
