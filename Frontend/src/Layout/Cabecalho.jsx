import '/bootstrap-5.3.1-dist/css/bootstrap.css'
import {Link} from 'react-router-dom'

export default function Cabecalho() {
  const imageStyle = {
    maxWidth: '100px', // Adjust the maximum width as needed
    maxHeight: '75px', // Adjust the maximum height as needed
  };
  return (
    <>
      <div id="topo" className="container-fluid">
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <Link to="/">
              <button className="btn btn-info"> <img src="/Logo.png" alt="Logo" style={imageStyle} />  </button>
            </Link>
          </div>

          <div className="col-md-8 col-sm-12 text-end">
            <Link to="/Agendamentos">
              <button className="btn btn-light">Meus Agendamentos</button>
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
