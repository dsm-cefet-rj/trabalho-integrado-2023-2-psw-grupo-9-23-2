import Cabecalho from '../src/Layout/Cabecalho.jsx'
import CardCarro from '../src/JavaScr/carros/CardCarro.jsx'
import Formulario from '../src/Layout/Formulario.jsx'
import '/bootstrap-5.3.1-dist/css/bootstrap.css'
import CarrosData from '../src/json/Carros.json'

export default function AntigosApp() {
  return (
    <>
      <Cabecalho /> 
      <h2>Escolha o carro de sua preferência:</h2>
      <hr mt-3></hr>
      <Formulario />
      <hr mt-3></hr>
        <main className="flex-fill">
          <div className="container">
            <div className="row g-3">
              {carrosData.map((carro, index) => (
            <CardCarro key={index} {...carro} />))}
            </div>
          </div>
        </main>
    </>
  );
};