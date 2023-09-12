import '/bootstrap-5.3.1-dist/css/bootstrap.css'
import './FormStyle.css'
export default function FormEntrar(props){
   return(
     <>      
       <br></br>         
      <div className="container-fluid">
        <h3>Olá, {props.nome}!</h3>
        <div className="d-flex justify-content-center" >
         <div id="externo">
            <form id="interno">
                <br></br>  
              <label for="campo_nome">Nome: </label>
                <input className="campo ms-5" type="text" placeholder={props.nome} readOnly></input>
                <br></br><br></br> 
                <label for="campo_email">Email: </label>
                <input className="campo ms-5" type="email" placeholder={props.email} readOnly></input>
                <br></br><br></br>  
                <label for="campo_telefone">Telefone: </label>
                <input className="campo ms-4" type="text" placeholder={props.telefone} readOnly></input>
                <br></br><br></br>
                <label for="campo_telefone">Data de nascimento: </label>
                <input className="campo" type="text" placeholder={props.dataNasc} readOnly></input>
                <br></br><br></br>
            
            </form>
          </div>  
        </div>
      </div>    
     </>
   );
};