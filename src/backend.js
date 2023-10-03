import axios from "axios";

const URL_BACK = 'http://localhost:5000/filmes';

export const converteFilme = (p) => {
  return {
    id: p.id ? p.id : p._id, // o spring trabalha com id o node trabala com _id
    nome: p.nome,
    ano: p.ano,
    avaliacao: p.avaliacao,
    foto: p.foto
  }
};

export const getFilmes = () => {
  return axios.get(URL_BACK).then(res => {
    return res.data.map(converteFilme);
  });
};

export const getFilmePorId = (id) => {
  return axios.get(URL_BACK + "/" + id).then(res => {
    return converteFilme(res.data);
  });
};

export const salvarFilme = (form) => {
  return axios.post(URL_BACK, form);
};

export const excluirFilme = (id) => {
  return axios.delete(URL_BACK + "/" + id);
};