import '/bootstrap-5.3.1-dist/css/bootstrap.css'
import {Link} from 'react-router-dom'
export default function Cabecalho() {
  return (
    <>
      <div id="topo" className="container-fluid">
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <Link to="/">
              <button className="btn btn-info">My friends automóveis</button>
            </Link>
          </div>

          <div className="col-md-8 col-sm-12 text-end">
            <Link to="/ChatApp">
              <button className="btn btn-light">Chat</button>
            </Link>

            <Link to="/Login">
              <button className="btn btn-primary">Meu perfil</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
