import Cabecalho from '../Layout/Cabecalho.jsx'
import FormEntrar from './FormEntrar.jsx'

import '/bootstrap-5.3.1-dist/css/bootstrap.css'
import {Link} from 'react-router-dom'

export default function Login(){
   return(
     <>
        <Cabecalho />
        <FormEntrar />
       <div className="container-fluid">
          <h3>Ainda não possui conta?</h3>
         <Link to="/Signin"><button className="btn btn-outline-info">Registre-se aqui!</button></Link>
       </div>
     </>
   );
};