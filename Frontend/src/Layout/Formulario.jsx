import '/bootstrap-5.3.1-dist/css/bootstrap.css'
import React, {useState, useEffect} from 'react'

export default function Formulario(props)
{
  
  const [marcas, setMarca] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:8000/filtros')
      .then((response) => response.json())
      .then((data) => {
        setMarca(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  /*
  function addMarca(pro)
  {
    if(marcas.filter((m) => m.marca == pro).length > 0)
    {
      alert("Essa marca já existe nos filtros!")
    }
    else{
      const nova ={marca:pro};
      const novaMarca=[...marcas, nova];
      setMarca(novaMarca);
      
    }
    
  }
  
  function delMarca(pro)
  {
    if(pro == "Escolha...")
    {
      alert("Escolha uma marca a ser excluída");
    }
    else
    {
      const novaMarca = marcas.filter((m)=> m.marca != pro);
      setMarca(novaMarca);
    }
  }

  function updtMarca(ant, novo)
  {
    if(ant == "Escolha...")
    {
      alert("Escolha uma marca a ser atualizada!");
    }
   else if(novo == "")
   {
     alert("Escolha um nome para atualizar a marca!");
   }
    else
    {
      if(marcas.filter((m) => m.marca == novo).length > 0)
      {
        alert("Essa marca já existe nos filtros!")
      }
      else
      {
        const nova = {marca: novo};
        const novaMarcas = [...marcas, nova];
        setMarca(novaMarcas.filter((m) => m.marca != ant));
      }     
    }
  }
  */
  const maxKm = "1000";
  const maxValor = "200000";
  return(
    <>
    <div className="container">.
      <div className="row ">
        <form>       
          <div className ="col">
            <label for="Nome" >Nome:</label>
          <br></br>
          <input id="Nome" type="text" value={props.buscaNome} onChange={(e) => {props.setBuscaNome(e.target.value)}}></input> 
            <br></br>
         <label for="campo_kilometragem">Kilometragem: <i>Max: {props.buscaKm != "" ? props.buscaKm : maxKm}</i> </label>
          <br></br>
          <input id="campo_kilometragem" type="range" min="0" max={maxKm} value= 
 {props.buscaKm != "" ? props.buscaKm : maxKm} onChange={(e) => {props.setBuscaKm(e.target.value)}}></input>
          <br></br>
          <br></br>
         <label for="campo_preco">Preço: <i>Max: R${props.buscaValor != "" ? props.buscaValor : maxValor},00</i></label>
          <br></br>
          <input id="campo_precp" type="range" min="0" max={maxValor} value= 
 {props.buscaValor != "" ? props.buscaValor : maxValor} onChange={(e) => {props.setBuscaValor(e.target.value)}}></input>
          <br></br>
        <label>Montadora:</label>
        <br></br>
        {marcas.map((m) =>
      <>
      <input id={m.marca } type="checkbox" value={props.buscaMarca.includes(m.marca) ? props.buscaMarca.replace(m.marca,"") : props.buscaMarca + m.marca} onChange={(e) => {props.setBuscaMarca(e.target.value); props.buscaMarca = e.target.value}}></input>
        <label for={m.marca}>{m.marca}  </label>
      </>
      )}        
          </div>
                
        </form>
      </div>
    </div>
    </>
  );
};
