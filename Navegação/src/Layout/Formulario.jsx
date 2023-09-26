import '/bootstrap-5.3.1-dist/css/bootstrap.css'
import {useState} from 'react'

export default function Formulario(props)
{
  const marc = [
    {marca: "Ford", id: "Ford"},
    {marca: "Fiat", id: "Fiat"},
    {marca: "Volkswagen", id: "Volk"},
    {marca: "Toyota", id: "Toyo"},
    {marca: "Brasilia", id: "Bras"},
    {marca: "Renault", id: "Rena"},
    {marca: "Peugeot", id: "Peug"},
  ];
const [marcas, setMarca] = useState(marc);
  
  function addMarca(pro)
  {
    if(marcas.filter((m) => m.marca == pro).length > 0)
    {
      alert("Essa marca já existe nos filtros!")
    }
    else{
      const nova ={marca:pro, id: pro.substring(0,4)};
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
        const nova = {marca: novo, id: novo.substring(0,4)};
        const novaMarcas = [...marcas, nova];
        setMarca(novaMarcas.filter((m) => m.marca != ant));
      }     
    }
  }
  const maxKm = "1000";
  const maxValor = "200000";
  return(
    <>
    <div className="container">.
      <div className="row ">
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Insira nome de marca" id="AddMarca"></input>
         <button class="btn btn-outline-secondary" type="button" onClick={() => addMarca(document.getElementById("AddMarca").value)}>Adicionar marca</button>
</div>
        <div class="input-group mb-3">
    <select class="form-select" id="DelMarca">
    <option selected >Escolha...</option>
       {marcas.map((m) =>
      <>
      <option value={m.marca}>{m.marca}</option>    
      </>
      )}        
  </select>
  <button class="btn btn-outline-secondary" type="button" onClick={() => delMarca(document.getElementById("DelMarca").value)}> Excluir marca</button>
      
        </div>
        <div class="input-group mb-3">
    <select class="form-select" id="UpdSelMarca">
    <option selected >Escolha...</option>
       {marcas.map((m) =>
      <>
      <option value={m.marca}>{m.marca}</option>    
      </>
      )}        
  </select>
   <input type="text" class="form-control" placeholder="Insira novo nome" id="UpdNovaMarca"></input>    
  <button class="btn btn-outline-secondary" type="button" onClick={() => updtMarca(document.getElementById("UpdSelMarca").value, document.getElementById("UpdNovaMarca").value)}> Atualizar marca</button>
       </div>
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
      <input id={m.id } type="checkbox" value={props.buscaMarca.includes(m.marca) ? props.buscaMarca.replace(m.marca,"") : props.buscaMarca + m.marca} onChange={(e) => {props.setBuscaMarca(e.target.value); props.buscaMarca = e.target.value}}></input>
        <label for={m.id}>{m.marca}  </label>
      </>
      )}        
          </div>
                
        </form>
      </div>
    </div>
    </>
  );
};
