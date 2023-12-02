import '/bootstrap-5.3.1-dist/css/bootstrap.css'
import {Link} from 'react-router-dom'

export default function CardCarro(props){

  function escolherCarro()
    {
      props.setEsco(props.nome);
      props.idCarro(props.id);
    }
  return(
  <>
    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 ">
      
      <div className="card text-center bg-light ">
        <img src={props.imgLink} className="card-img-top"></img>
        <div className="card-header">
          <h5 className="card-title">{ props.nome }</h5>
        </div>
        <div className="card-body">
          <p className="card-text">Kilometragem: {props.km}<br></br>Marca: {props.marca}<br></br><b>Valor: R${props.valor},00</b></p>
        </div>
        <div className="card-footer">
          <button className="btn btn-secondary" onClick={escolherCarro}>Ver Detalhes</button>
        </div>
      </div> 
      
    </div>
  </>
  );
};