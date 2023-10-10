import Cabecalho from '../Layout/Cabecalho.jsx'
import FormCadastrar from './FormCadastrar.jsx'

import '/bootstrap-5.3.1-dist/css/bootstrap.css'

export default function Login(){
   return(
     <>
       <Cabecalho />
       <div className="container-fluid">
          <h3>Preencha os seus dados abaixo:</h3>
       </div>
        <hr mt-3></hr>
      <FormCadastrar />
       
     </>
   );
};