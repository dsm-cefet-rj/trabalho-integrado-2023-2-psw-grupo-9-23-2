import Cabecalho from '../../Layout/Cabecalho.jsx'
import FichaTecnica from './FichaTecnica.jsx'
import ImagemEscolhido from './ImagemEscolhido.jsx'
import '/bootstrap-5.3.1-dist/css/bootstrap.css'
import {Link} from 'react-router-dom'
export default function CarroEscolhido(props){
   let idEscolhido = props.escolhido;
  function voltarSelecao()
    {
      props.setEsco('');
      if(props.isAntigo == true)
      {       
        <Link to="/Antigos"></Link>
      }
      else{
        <Link to="/Seminovos"></Link>
      }
    }
  return(
     <>
      <Cabecalho />
       <br></br>
       <div className='container'>
         <button class='btn btn-info' onClick={voltarSelecao}> Voltar</button>
        <div className='row g-5'>
          <ImagemEscolhido imageSrc={props.imgLink} />
          <FichaTecnica nome={props.nome} marca={props.marca} valor={props.valor} km={props.km}/>
        </div>
         <br></br>
         <h3>Demonstrou interesse?</h3>
         <Link to="/Carro/ChatCarro"><button className='btn btn-info'> Agende um horário conosco!</button></Link>
        
       </div>
       
     </>
   );
};