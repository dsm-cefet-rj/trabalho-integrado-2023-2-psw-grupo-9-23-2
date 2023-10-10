import '../../bootstrap-5.3.1-dist/css/bootstrap.css';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white p-4 fixed-bottom">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-3">
            <button className="btn btn-link text-white">
              Gerenciar Horários
            </button>
          </div>
          <div className="col-3">
            <button className="btn btn-link text-white">
              Gerenciar Carros
            </button>
          </div>
          <div className="col-3">
            <button className="btn btn-link text-white">
              Gerenciar Filtros
            </button>
          </div>
          <div className="col-3">
            <button className="btn btn-link text-white">
              Gerenciar Usuários
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;