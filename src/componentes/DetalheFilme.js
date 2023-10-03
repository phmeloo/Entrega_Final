import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getFilmePorId } from "../backend";

export default function DetalheFilme({onExcluir}) {
  let {id} = useParams();
  const navigate = useNavigate();

  const [filme, setFilme] = useState({
    nome: '',
    ano: '',
    avaliacao: '',
    foto: ''
  });

  useEffect(() => {
    getFilmePorId(id).then(p => setFilme(p));
  }, [id]); // sempre que o id mudar, o produto deve mudar

  const excluir = () => {
    onExcluir(id).then(navigate('/')); // depois de excluir, voltar para a página inicial
  };

  return (
    <div>
      <img src={filme.foto} alt="Foto do filme"/>
      <h1>{filme.nome}</h1>
      <h3>{filme.ano}</h3>
      <h3>{filme.avaliacao}</h3>
      <button className='btn btn-danger' onClick={() => excluir()}>Excluir</button>
      <Link className='btn btn-success' to="/">Voltar</Link>
    </div>
  )
}