import Cabecalho from '../Layout/Cabecalho.jsx'
import CardCarro from './CardCarro.jsx'
import Formulario from '../Layout/Formulario.jsx'
import '/bootstrap-5.3.1-dist/css/bootstrap.css'
const CARROS=[
  {nome:"Fusca 1994" ,imgLink:"public/Antigos/antigo1.PNG", km:"500", marca:"Positivo", valor:"R$30.000,00"},
  {nome:"Mustang 1899" ,imgLink:"public/Antigos/antigo2.PNG", km:"500", marca:"Fiat", valor:"R$45.000,00"}
]
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
              <CardCarro nome="Fusca 1994" imgLink="public/Antigos/antigo1.PNG" km="500" marca="Positivo" valor="R$30.000,00" />
              <CardCarro nome="Mustang 1899" imgLink="public/Antigos/antigo2.PNG" km="500" marca="Fiat" valor="R$45.000,00"/>
              <CardCarro nome="Picape 1965" imgLink="public/Antigos/antigo3.PNG" km="500" marca="Toyota" valor="R$35.000,00"/>
              <CardCarro nome="Fuscão Branco" imgLink="public/Antigos/antigo4.PNG" km="500" marca="Ford" valor="R$50.000,00"/>
              <CardCarro nome="BatMovel" imgLink="public/Antigos/antigo5 (1).PNG" km="500" marca="Fiat" valor="R$100.000,00"/>
              <CardCarro nome="Brasilia 1985" imgLink="public/Antigos/antigo3.PNG " km="500" marca="Nokia" valor="R$20.000,00"/>
              <CardCarro nome="Marajo 1945" imgLink="public/Antigos/antigo4.PNG" km="500" marca="Volkswagem" valor="R$60.000,00"/>
            </div>
          </div>
        </main>
    </>
  );
};