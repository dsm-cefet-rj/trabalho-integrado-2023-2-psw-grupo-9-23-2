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
    console.log(car + " " + props.data);
    if(car.length <= 0 && aux)
    {
      car.nome = "Carro inexistente ou deletado.";
    }
  
  return(
  <>
    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 ">
      
      <div className="card text-center bg-light ">
        
        <div className="card-body">
          <p className="card-text">Dia: {props.data}<br></br>Horário: {props.hora}<br></br></p>{aux && <p>Carro: </p>}
        </div>
        <div className="card-footer">
        </div>
      </div> 
      
    </div>
  </>
  );
};