import '/bootstrap-5.3.1-dist/css/bootstrap.css'
import React, { useEffect, useState } from 'react';
export default function CardAgendamento(props){
  const aux = props.carroRef != null ? true : false;
  const [carros, setCarros] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:8000/carros')
      .then((response) => response.json())
      .then((data) => {
        setCarros(data);
       
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  
    const car = carros.filter(
      (c) => c.id == props.carroRef
    );
    
    if(car.length <= 0 && aux)
    {
      car.nome = "Carro inexistente ou deletado.";
    }
    
    if(car.length > 0 && aux)
    {
      return(
        <>
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 ">
            
            <div className="card text-center bg-light ">
              
              <div className="card-body">
                <p className="card-text">Dia: {props.data}<br></br>Horário: {props.hora}<br></br></p>{aux && <p>Carro: {car[0].nome}</p>}
              </div>
              <div className="card-footer">
              </div>
            </div> 
            
          </div>
        </>
        );
    }
    else if(!aux)
    {
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
    }
    else
    {
      return(
        <>
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 ">
            
            <div className="card text-center bg-light ">
              
              <div className="card-body">
                <p className="card-text">Dia: {props.data}<br></br>Horário: {props.hora}<br></br></p><p>Carro inexistente ou deletado!</p>
              </div>
              <div className="card-footer">
              </div>
            </div> 
            
          </div>
        </>
        );
    }
  
};