import '/bootstrap-5.3.1-dist/css/bootstrap.css';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCarros } from '../src/JavaScr/redux/carros/carrosSlice'; // Importe a ação fetchCarros corretamente

export default function CardCarroB(props) {
  const carros = useSelector((state) => state.carros.carros); // Ajuste o caminho conforme necessário
  const dispatch = useDispatch();

  useEffect(() => {
    // Aqui, você pode despachar a ação para carregar os dados dos carros quando o componente for montado
    dispatch(fetchCarros()); // Certifique-se de ter essa ação configurada no seu carroSlice
  }, []); // Dependência vazia para que o useEffect seja executado apenas uma vez

  if (!carros.length) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      {carros.map((carro) => (
        <div key={carro.id} className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
          <div className="card text-center bg-light">
            <img src={carro.imgLink} className="card-img-top" alt={carro.nome} />
            <div className="card-header">
              <h5 className="card-title">{carro.nome}</h5>
            </div>
            <div className="card-body">
              <p className="card-text">
                Kilometragem: {carro.km}<br />
                Marca: {carro.marca}<br />
                <b>Valor: {carro.valor}</b>
              </p>
            </div>
            <div className="card-footer">
              <Link to="/Carro">
                <button className="btn btn-secondary">Ver Detalhes</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}




