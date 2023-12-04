import '/bootstrap-5.3.1-dist/css/bootstrap.css'
import { Link } from 'react-router-dom';
export default function FuncoesAdm()
{
    return(
        <>
        <Cabecalho></Cabecalho>
            <div className='container'>
                <h2>Visão de Administrador:</h2>
                <h3>Gerenciar filtros: </h3>
                <div className='col'>
                    <Link to="/filtros-adm"><button className='btn btn-info'>Gerenciar marcas</button></Link>                  
                </div>
                
            </div>
        </>
        
    );
};