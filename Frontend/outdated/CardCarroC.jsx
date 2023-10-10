import '/bootstrap-5.3.1-dist/css/bootstrap.css'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import carrosSlice { fetchCarros } from '../redux/carros/carrosSlice'; // Importe a ação assíncrona do seu slice

export default function CardCarroC({ isAntigo }) {
  const dispatch = useDispatch();
  const carros = useSelector((state) => state.carros.carros); // Acesse os carros do estado usando useSelector

  useEffect(() => {
    // Dispare a ação para carregar os carros com base na propriedade isAntigo
    dispatch(fetchCarros(isAntigo));
  }, [dispatch, isAntigo]);

  return (
    <>
      {carros.map((carro) => (
        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6" key={carro.id}>
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
