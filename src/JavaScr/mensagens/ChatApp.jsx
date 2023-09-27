import '/bootstrap-5.3.1-dist/css/bootstrap.css'
import Cabecalho from '../../Layout/Cabecalho.jsx'
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react'

export default function ChatApp(props) {

  const mens= {msg: "Bem-vindo ao chat!", id: "1234"};
  const [msgs, setMsg] = useState(mens);
  
  function addMsg(pro)
  {
      const nova ={msg:pro, id: pro.substring(0,4)};//id tamanho + 1
      const novaMsg=[...msgs, nova];
      setMsg(novaMsg);
  }
  
  return(
  <>
    <Cabecalho/>
    <main className="flex-fill">
      <div className="container">
        <div className="d-flex flex-column mb-3">
          
          <div className="col md-12 input-group mb-3">
            <input type="text" className="form-control" placeholder="Mensagem" id="AddMsg"></input>
            <button className="btn btn-outline-secondary" type="button" onClick={() => addMsg(document.getElementById("AddMsg").value)}>Enviar</button>
          </div>
       
          <div className="col md-12">

            
{msgs.map((m) =>
      <p>
        {m.msg}
      </p>
      )}        
             
          </div>
        
        </div>
      </div>
    </main>
  
  </>
  );
};
