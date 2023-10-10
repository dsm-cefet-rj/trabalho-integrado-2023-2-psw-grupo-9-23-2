import '/bootstrap-5.3.1-dist/css/bootstrap.css'
import './FormStyle.css'
import {Link} from 'react-router-dom'

export default function FormEntrar(){
   return(
     <>
       <br></br>         
      <div className="container-fluid">
        <div className="d-flex justify-content-center" >
         <div id="externo">
            <form id="interno">
                <br></br>        
                <label for="campo_email">Email: </label>
                <input className="campo" type="email" placeholder="Digite o email..."></input>
                <br></br><br></br>  
                <label for="campo_senha">Senha: </label>
                <input className="campo" id="campo_senha" type="password" placeholder="Digite a senha..."></input>
                <br></br><br></br>
                <Link to="/MeusDados"><input type="submit" placeholder="Entrar"></input></Link>
            
            </form>
          </div>  
        </div>
      </div>    
     </>
   );
};