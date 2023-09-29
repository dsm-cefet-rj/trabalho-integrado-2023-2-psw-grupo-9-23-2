import '/bootstrap-5.3.1-dist/css/bootstrap.css'

export default function CardAgendamento(props){

  return(
  <>
    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 ">
      
      <div className="card text-center bg-light ">
        
        <div className="card-body">
          <p className="card-text">Dia: {props.data}<br></br>Horário: {props.hora}<br></br></p>
        </div>
        <div className="card-footer">
        </div>
      </div> 
      
    </div>
  </>
  );
};