import Cabecalho from "../Layout/Cabecalho";
import '/bootstrap-5.3.1-dist/css/bootstrap.css'







  const ButtonRow = ({ title, buttons, imageSize }) => {
    const imageStyle = {
      width: 80,
      height: 80, 
    };
  
    return (
        <div className="container mt-4">
          <h2>{title}</h2>
          <div className="row">
            {buttons.map((button, index) => (
              <div key={index} className="col-md-3 mb-4">
                <div className="card">
                  <a href={button.link}>
                    <div className="row no-gutters">
                      <div className="col-4">
                        <img
                          src={button.image}
                          className="card-img"
                          alt={button.text}
                          style={imageStyle}
                        />
                      </div>
                      <div className="col-8">
                        <div className="card-body">
                          <p className="card-text">{button.text}</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    };
    
  
  
  const CarrosButtons = [
    { text: 'Criar Carro', image: './Feather Icons/bell.svg', link: '/CriadorCarro' },
    { text: 'Atualizar Carro', image: './Feather Icons/bell.svg',link: '/CriadorCarro' },
    { text: 'Apagar Carro', image: './Feather Icons/bell.svg',link: '/CriadorCarro' },
    { text: 'Listar Carros', image: './Feather Icons/bell.svg' ,link: '/CriadorCarro'},
  ];
  
  const FiltrosButtons = [
    { text: 'Criar Filtro', image: './Feather Icons/bell.svg',link: '/CriadorCarro' },
    { text: 'Atualizar Filtro', image: './Feather Icons/bell.svg' ,link: '/CriadorCarro'},
    { text: 'Apagar Filtro', image: './Feather Icons/bell.svg',link: '/CriadorCarro' },
    { text: 'Listar Filtros', image: './Feather Icons/bell.svg' ,link: '/CriadorCarro'},
  ];
  
  const HorariosButtons = [
    { text: 'Horário 1', image: 'horario.png' },
    { text: 'Horário 2', image: 'horario.png' },
    { text: 'Horário 3', image: 'horario.png' },
    { text: 'Horário 4', image: 'horario.png' },
  ];



    export default function DashBoard(){
        return <>
            <Cabecalho></Cabecalho>
            <ButtonRow title="Carros" buttons={CarrosButtons} />
            <ButtonRow title="Filtros" buttons={FiltrosButtons} />


</>
}