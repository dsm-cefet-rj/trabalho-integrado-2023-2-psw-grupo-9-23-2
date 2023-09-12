import Cabecalho from '../Layout/Cabecalho.jsx'
import CardCarro from './CardCarro.jsx'
import Formulario from '../Layout/Formulario.jsx'
import '/bootstrap-5.3.1-dist/css/bootstrap.css'

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
              <CardCarro nome="Fiat Uno 2013" imgLink="public/Seminovos/Semi1.PNG" km="500" marca="Fiat" valor="R$30.000,00" />
              <CardCarro nome="Renault Kwid 2020" imgLink="public/Seminovos/Semi2.PNG" km="500" marca="Renault" valor="R$40.000,00"/>
              <CardCarro nome="Ford Fiesta 2008" imgLink="public/Seminovos/Semi3.PNG" km="500" marca="Ford" valor="R$45.000,00"/>
              <CardCarro nome="Fuscão Branco" imgLink="public/Seminovos/Semi4.PNG" km="500" marca="Ford" valor="R$60.000,00"/>
              <CardCarro nome="BatMovel" imgLink="public/Seminovos/Semi5.PNG" km="500" marca="Fiat" valor="R$200.000,00"/>
              <CardCarro nome="Brasilia 1985" imgLink="public/Seminovos/Semi6.PNG" km="500" marca="Nokia" valor="R$40.000,00"/>
              <CardCarro nome="Marajo 1945" imgLink="public/Seminovos/Semi7.PNG" km="500" marca="Volkswagem" valor="R$50.000,00"/>
            </div>
          </div>
        </main>
    </>
  );
};