import Cabecalho from '../../Layout/Cabecalho.jsx'
import CardCarro from './CardCarro.jsx'
import Formulario from '../../Layout/Formulario.jsx'
import '/bootstrap-5.3.1-dist/css/bootstrap.css'
import CarroEscolhido from './CarroEscolhido.jsx'
import { Link } from 'react-router-dom';
import React, {useState, useEffect } from 'react'
import { useSelector } from 'react-redux';



export default function AntigosApp() {
  const listaCarros = useSelector((state) => state.listaCarros);
  
 // useEffect(() => {   dispatch(fetchCarros()); // Update the action name to fetchCarros}, [dispatch]);
  
  
  
  const [escolhido, setEsco] = useState('');
  
  //READ ESTÁ AQUI
  
  //const [carros, setCarros] = useState([]);
  /* useEffect(() => {
    fetch('http://localhost:8000/carros')
      .then((response) => response.json())
      .then((data) => {
        setCarros(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); */

  const [buscaNome, setBuscaNome] = useState('');
  const [buscaMarca, setBuscaMarca] = useState('');
  const [buscaValor, setBuscaValor] = useState('');
  const [buscaKm, setBuscaKm] = useState('');
  
  const lowerBusca = buscaNome.toLowerCase();
  
  const carrosFiltrados = listaCarros.items.filter(
    (carro) => carro.isAntigo === true &&
    carro.nome.toLowerCase().includes(lowerBusca) &&
    (buscaMarca != "" ? buscaMarca.includes(carro.marca) : carro.marca)&&
    (buscaValor != "" ? parseInt(carro.valor) <= parseInt(buscaValor) : carro.valor) &&  
    (buscaKm != "" ? parseInt(carro.km) <= parseInt(buscaKm) : carro.km)   
  );
  if(escolhido == '')
  {
    return (
    <>
      <Cabecalho />
      <Link to="/CriadorCarro"><button>Criar Carro</button></Link>
      <Link to="/UpdaterCarro"><button>Modificar Carro</button></Link>
      <Link to="/DeleterCarro"><button>Apagar Carro</button></Link>
      <h2>Escolha o carro de sua preferência:</h2>
      <hr mt-3></hr>
      <Formulario 
        buscaNome={buscaNome} setBuscaNome={setBuscaNome}
         buscaMarca ={buscaMarca}  setBuscaMarca = {setBuscaMarca}
        buscaValor = {buscaValor} setBuscaValor = {setBuscaValor}
        buscaKm = {buscaKm} setBuscaKm = {setBuscaKm}
        />
      <hr mt-3></hr>
      <main className="flex-fill">
        <div className="container">
          <div className="row g-3">
            {carrosFiltrados.map((carro, index) => (
              <CardCarro key={index} {...carro}  setEsco = {setEsco}/>))}
          </div>
        </div>
      </main>
    </>
  );
  }
  else{
   
    const carroAtual = carros.find(
      (carro) => carro.nome.includes(escolhido)
    );

    return(
      <>
          
        <CarroEscolhido {...carroAtual} isAntigo= {true} setEsco = {setEsco}/>
        
      </>
    );
  }
};
