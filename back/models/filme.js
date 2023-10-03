const mongoose = require('mongoose');

const FilmeSchema = { 
  nome: String ,
  ano: Number ,
  avaliacao: Number,
  foto: String
};

module.exports = mongoose.model("Filme",FilmeSchema);