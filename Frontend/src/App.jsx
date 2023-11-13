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

import FiltrosAdm from './Filtros/FiltrosAdm'



import DashBoard from "./JavaScr/DashBoard.jsx"

import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Antigos" element={<AntigosApp />} />
          <Route path="/Seminovos" element={<SeminovoApp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/MeusDados" element={<MeusDados />} />
          <Route path="/Carro" element={<CarroEscolhido />} />
          <Route path="/Carro/ChatCarro" element={<ChatCarro />} />
          <Route path="/AgendConcl" element={<AgendConcl />} />
          <Route path="/CriadorCarro" element={<CriadorCarro />} />
          <Route path="/UpdaterCarro" element={<UpdaterCarro />} />
          <Route path="/DeleterCarro" element={<DeleterCarro />} />
          <Route path="/Agendamentos" element={<ListaAgendamentos />} />
          <Route path="/filtros-adm" element={<FiltrosAdm />} />
          <Route path="/criador-agenda" element={<CriadorAgenda />} />
          <Route path="/DashBoard" element={<DashBoard />} />
          <Route path="/deletar-agenda" element={<DeletarAgenda />} />
          <Route path="/checar-agenda" element={<ChecarAgendamentos />} />
        </Routes>
    </>
  )

}
