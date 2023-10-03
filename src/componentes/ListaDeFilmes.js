import React from 'react'
import { Link } from 'react-router-dom';

export default function ListaDeFilmes({filmes}) {
  const renderFilme = (filme) => {
    return (
      <div className='filme' key={'filme_' + filme.id}>
        <Link to={'/detalhe/' + filme.id}>
          <img src={filme.foto} alt={'Cartaz do filme: ' + filme.nome}/>
        </Link>
        <p className='nome'>{filme.nome}</p>
        <p className='ano'>{filme.ano}</p>
        <p className='avaliacao'>{filme.avaliacao}</p>
      </div>
    );
  };

  return (
    <div className='listaDeFilmes'>
      { filmes.map(renderFilme) }
    </div>
  )
}