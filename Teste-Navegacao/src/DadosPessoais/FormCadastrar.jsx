import '/bootstrap-5.3.1-dist/css/bootstrap.css'
import './FormStyle.css'
import {Link} from 'react-router-dom'
export default function FormCadastrar(){
   return(
     <>
       <br></br>         
      <div className="container-fluid">
        <div className="d-flex justify-content-center" >
         <div id="externo">
            <form id="interno">
                <br></br>  
                <label for="campo_nome">Nome:</label>
          <input className="campo ms-5 mb-1" id="campo_nome" type="name" placeholder="Digite o nome..."></input>
          <br></br>
              <label for="campo_data">Data de nascimento:</label>
          <input className="campo mb-1" id="campo_data " type="date"></input>
          <br></br>
                <label for="campo_email">Email: </label>
                <input className="campo ms-5 mb-1" type="email" placeholder="Digite o email..."></input>
                <br></br>
              <label for="campo_telefone">Telefone:</label>
              <input className="campo ms-4 mb-1" id="campo_telefone" type="tel" placeholder="Digite o telefone..."></input>
                <br></br>
                <label for="campo_senha">Senha: </label>
                <input className="campo ms-5" id="campo_senha" type="password" placeholder="Digite a senha..."></input>
                <br></br><br></br>
                <Link to="/MeusDados"><input type="submit" placeholder="Entrar"></input></Link>
            
            </form>
          </div>  
        </div>
      </div>    
     </>
   );
};