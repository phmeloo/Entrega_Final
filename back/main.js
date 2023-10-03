require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser'); // importei o body-parser
const mongoose = require('mongoose');
const cors = require('cors');

//criando servidor
const app = express();

// configurando o servidor web
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// conectando os controllers ao servidor web
app.use('/filmes', require('./controllers/filme_controller'));

console.log('Conectando ao banco de dados...');
mongoose.connect(process.env.URL_BANCO_DE_DADOS).then(() => {
  console.log('Conectado ao banco de dados com sucesso!');
  app.listen(parseInt(process.env.PORTA_SERVIDOR), () => {
    console.log(`O servidor está no ar em http://localhost:${process.env.PORTA_SERVIDOR}`);
  });
});

//console.log('Iniciando o servidor ...');
//app.listen(5000, () => {
//  console.log('Acesse em http://127.0.0.1:5000')
//});
