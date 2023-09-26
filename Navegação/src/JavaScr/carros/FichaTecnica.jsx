import '/bootstrap-5.3.1-dist/css/bootstrap.css'

export default function FichaTecnica(props)
{
  return(
    <>
      <div className="col-xl-4 col-md-6 col-sm-12">
            <p>
              <b>Nome:</b> {props.nome}<br></br>            
              <b>Marca:</b> {props.marca}<br></br>
              <b>Valor:</b> R${props.valor},00 <br></br>
              <b>Kilometragem:</b> {props.km}<br></br>  
            </p>
          </div>
    </>
  );
};