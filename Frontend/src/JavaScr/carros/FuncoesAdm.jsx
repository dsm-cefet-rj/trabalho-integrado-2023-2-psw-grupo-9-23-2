import '/bootstrap-5.3.1-dist/css/bootstrap.css'
import { Link } from 'react-router-dom';

export default function FuncoesAdm()
{
    return(
        <>
            <div className='container'>
                <h2>Visão de Administrador:</h2>
                <h4>Gerenciar carros: </h4>
                <div className='col'>
                    <Link to="/CriadorCarro"><button className='btn btn-info'>Criar Carro</button></Link>
                    <Link to="/UpdaterCarro"><button className='btn btn-info'>Modificar Carro</button></Link>
                    <Link to="/DeleterCarro"><button className='btn btn-info'>Apagar Carro</button></Link>
                </div>
                <h3>Gerenciar filtros: </h3>
                <div className='col'>
                    <Link to="/filtros-adm"><button className='btn btn-info'>Gerenciar marcas</button></Link>                  
                </div>
                <h3>Gerenciar agendamentos: </h3>
                <div className='col'>
                    <Link to="/criador-agenda"><button className='btn btn-info'>Criar agendamentos</button></Link>                  
                    <button className='btn btn-info'>Deletar agendamentos</button>
                </div>
            </div>
        </>
        
    );
};