import '/bootstrap-5.3.1-dist/css/bootstrap.css'
import {Link} from 'react-router-dom'

export default function Corpo() {
  return (
    <>
      <h2>Bem vindo ao My friends automóveis!<br></br>Escolha a opção que te interessa:</h2>
      <hr mt-3></hr>
      <main className="flex-fill ">
          <div className="container">
            <div className="row g-6">
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 offset-lg-1">
                <div className="card text-center bg-info ">
                   <img src="public/Buttons/carro-seminovo.PNG" className="card-img-top"></img>
                  <div className="card-footer">
                     <Link to="/Seminovos"><button className="btn btn-primary">Ver Detalhes</button></Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 offset-lg-2">
                <div className="card text-center bg-info ">
                   <img src="public/Buttons/carro-antigo.PNG" className="card-img-top"></img>
                  <div className="card-footer">
                     <Link to="/Antigos"><button className="btn btn-primary">Ver Detalhes</button></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </main>

    </>
  );

};

