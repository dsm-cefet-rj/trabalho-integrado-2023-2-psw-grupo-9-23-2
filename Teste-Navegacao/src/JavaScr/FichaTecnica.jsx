import '/bootstrap-5.3.1-dist/css/bootstrap.css'

export default function FichaTecnica(props)
{
  return(
    <>
      <div className="col-xl-4 col-md-6 col-sm-12">
            <p>
              Nome: {props.nome}<br></br>            
              Ano: {props.ano}<br></br>
              Valor: R${props.valor},00 <br></br>
              Kilometragem: {props.km}<br></br>  
            </p>
          </div>
    </>
  );
};