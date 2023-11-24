import '/bootstrap-5.3.1-dist/css/bootstrap.css';
import './FormStyle.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function FormCadastrar() {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    campo_nome: '',
    campo_data: '',
    email: '',
    campo_telefone: '',
    campo_senha: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const usuario = {
      nome: formData.campo_nome,
      dataNascimento: formData.campo_data,
      email: formData.email,
      telefone: formData.campo_telefone,
      senha: formData.campo_senha
    };


    console.log(usuario);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  return (
    <>
      <br />
      <div className="container-fluid">
        <div className="d-flex justify-content-center">
          <div id="externo">
            <form id="interno" onSubmit={handleSubmit}>
              <br />
              <label htmlFor="campo_nome">Nome:</label>
              <input
                className="campo ms-5 mb-1"
                id="campo_nome"
                type="name"
                name="campo_nome"
                value={formData.campo_nome}
                onChange={handleChange}
                placeholder="Digite o nome..."
              />
              <br />
              <label htmlFor="campo_data">Data de nascimento:</label>
              <input
                className="campo mb-1"
                id="campo_data"
                type="date"
                name="campo_data"
                value={formData.campo_data}
                onChange={handleChange}
              />
              <br />
              <label htmlFor="campo_email">Email: </label>
              <input
                className="campo ms-5 mb-1"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Digite o email..."
              />
              <br />
              <label htmlFor="campo_telefone">Telefone:</label>
              <input
                className="campo ms-4 mb-1"
                id="campo_telefone"
                type="tel"
                name="campo_telefone"
                value={formData.campo_telefone}
                onChange={handleChange}
                placeholder="Digite o telefone..."
              />
              <br />
              <label htmlFor="campo_senha">Senha: </label>
              <input
                className="campo ms-5"
                id="campo_senha"
                type="password"
                name="campo_senha"
                value={formData.campo_senha}
                onChange={handleChange}
                placeholder="Digite a senha..."
              />
              <br />
              <br />
              <Link to="/MeusDados">
                <button type="submit">Cadastrar</button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}