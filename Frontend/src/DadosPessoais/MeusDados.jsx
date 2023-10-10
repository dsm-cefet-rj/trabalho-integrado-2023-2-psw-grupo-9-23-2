import Cabecalho from '../Layout/Cabecalho.jsx'
import FormDadosPessoais from '../DadosPessoais/FormDadosPessoais'
import LinhaTabelaAgenda from '../DadosPessoais/LinhaTabelaAgenda.jsx'
import '/bootstrap-5.3.1-dist/css/bootstrap.css'

export default function MeusDados(){
   return(
     <>
        <Cabecalho />
        <FormDadosPessoais nome="José Nome Falso" email="jose@outlook.com" telefone="900000000" dataNasc="01/01/2001" />
        <hr mt-3></hr>
       <div className="container">
         <h3>Seus compromissos: </h3><br></br>
       <table className="table table-bordered">
          <tr>
            <th>Carro</th>
            <th>Data</th>
          </tr>
         <LinhaTabelaAgenda carro="Citroen c-3 2015" data="18/09/2023" />
         <LinhaTabelaAgenda carro="Ford Fiesta 2008" data="04/10/2023" />
         <LinhaTabelaAgenda carro="Brasilia 1990" data="20/10/2023" />
       </table>
         </div>
     </>
   );
};