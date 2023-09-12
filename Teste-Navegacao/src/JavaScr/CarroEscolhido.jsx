import Cabecalho from '../Layout/Cabecalho.jsx'
import FichaTecnica from './FichaTecnica.jsx'
import ImagemEscolhido from './ImagemEscolhido.jsx'
import '/bootstrap-5.3.1-dist/css/bootstrap.css'
import {Link} from 'react-router-dom'
export default function CarroEscolhido(){
   return(
     <>
      <Cabecalho />
       <br></br>
       <div className='container'>
        <div className='row g-5'>
          <ImagemEscolhido imageSrc="public/Seminovos/Semi4.PNG" />
          <FichaTecnica nome="Mercedez 2014" ano="2010" valor="75.000" km="350"/>
        </div>
         <br></br>
         <h3>Demonstrou interesse?</h3>
         <Link to="/Carro/ChatCarro"><button className='btn btn-info'> Entre em contato conosco!</button></Link>
        
       </div>
       
     </>
   );
};