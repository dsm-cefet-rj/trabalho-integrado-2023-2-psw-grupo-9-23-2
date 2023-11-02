import '/bootstrap-5.3.1-dist/css/bootstrap.css'
import { Link } from 'react-router-dom';
import React, {useState, useEffect} from 'react'
import Cabecalho from '../Layout/Cabecalho';
export default function CriadorFiltros()
{
    /*
    const [marcas, setMarca] = useState({
        marca: '',       
      });
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setMarca({
            ...marcas,
          [name] : value
        });
      };
        
      useEffect(() => {
        fetch('http://localhost:8000/filtros')
          .then((response) => response.json())
          .then((data) => {
            setMarca(data);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
      }, []);
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const newEntry = {
            marca: marcas.marca, 
            id: marcas.length + 1     
          };
    
          const response = await fetch('http://localhost:8000/filtros', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newEntry),
          });
    
          if (response.ok) {
            const responseData = await response.json();
            console.log('New entry created:', responseData);
    
            setMarca({
                marca: '',               
              });
          } else {
            console.error('Error creating new entry:', response.status, response.statusText);           
          }
        } catch (error) {
            alert('Essa marca já existe nos filtros!');
            console.log(error);
        }
      };
    return(
        <>
            <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                    <label htmlFor="marca">Insira nome de marca: </label>
                    <input type="text" className="form-control" 
                    id="marca"
                    name="marca"
                    value={marcas.marca}
                    onChange={handleInputChange}
                    />
                    <button className="btn btn-outline-secondary" type="submit">Adicionar marca</button>
                </div>
            </form>
        </>
    );
    */
    const [formData, setFormData] = useState({
        marca: '',
        
      });
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
      
      const [mar, setMar] = useState([]);
    
      useEffect(() => {
        fetch('http://localhost:8000/filtros')
          .then((response) => response.json())
          .then((data) => {
            setMar(data);
          })
          .catch((error) => {
            
            console.error('Error fetching data:', error);
          });
      }, []);
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const newEntry = {
            ...formData,
            id: formData.marca
          };
    
          const response = await fetch('http://localhost:8000/filtros', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newEntry),
          });
    
          if (response.ok) {
            const responseData = await response.json();
            console.log('New entry created:', responseData);
    
            setFormData({
                marca: '',
                
              });
          } else {
            console.error('Error creating new entry:', response.status, response.statusText);
            if(response.status == 500)
            {
                alert("Essa marca já existe nos filtros!");
            }
          }
        } catch (error) {
            if(error == 500)
            {
                alert("Essa marca já existe nos filtros!");
            }
          console.error('Error creating new entry:', error);
        }
      };
    
      return (
        <>
        
        <div>
        
        <div className='input-group mb-3'>
          <form onSubmit={handleSubmit}>        
                      
              <input className='form-control' placeholder='Insira marca a ser criada...'
                type="text"
                id="marca"
                name="marca"
                value={formData.marca}
                onChange={handleInputChange}
              />
            
            
            <button className="btn btn-outline-secondary" type="submit">Adicionar</button>
          </form>
          </div>
        </div>
    
        </>
      );
};