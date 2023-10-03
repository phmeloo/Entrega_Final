import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function FormFilme({onCadastrar}) {
  const formVazio = () => {
    return {
        nome: '',
        ano: '',
        avaliacao: '',
        foto: ''
    };
  };

  const navigate = useNavigate();
  const [form, setForm] = useState(formVazio());

  const setValor = (evento) => {
    setForm({...form, [evento.target.name]: evento.target.value});
  };

  const cadastrarFilme = (e) => {
    e.preventDefault();
    onCadastrar(form).then(() => {
      navigate('/');
    });
  };

  return (
    <form onSubmit={cadastrarFilme}>
      <div className="mb-3">
        <label className="form-label">Nome:</label>
        <input name="nome" type="text" value={form.nome} onChange={setValor} className="form-control"/>
      </div>
      <div className="mb-3">
        <label className="form-label">Ano:</label>
        <input name="ano" type="number" value={form.ano} onChange={setValor} className="form-control"/>
      </div>
      <div className="mb-3">
        <label className="form-label">Avaliacao:</label>
        <input name="avaliacao" type="number" value={form.avaliacao} onChange={setValor} className="form-control"/>
      </div>
      <div className="mb-3">
        <label className="form-label">Foto URL:</label>
        <input name="foto" type="text" value={form.foto} onChange={setValor} className="form-control"/>
      </div>
      <button className='btn btn-primary'>Cadastrar</button>
    </form>
  )
}