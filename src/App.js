import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { useEffect, useState } from "react";
import Cabecalho from "./componentes/Cabecalho";
import FormFilme from "./componentes/FormFilme";
import ListaDeFilmes from "./componentes/ListaDeFilmes";
import DetalheFilme from "./componentes/DetalheFilme";
import PaginaNaoEncontrada from "./componentes/PaginaNaoEncontrada";
import { getFilmes, salvarFilme, excluirFilme } from "./backend";

function App() {
  const [filmes, setFilmes] = useState([]);

  const cadastrarFilme = async (form) => {
    await salvarFilme(form);
    setFilmes(await getFilmes());
  };

  const removerFilme = async (id) => {
    await excluirFilme(id);
    setFilmes(await getFilmes());
  };

  // função chamada quando o componente for carregado
  useEffect(() => {
    getFilmes().then(prods => setFilmes(prods));
  }, []);

  return (
    <div className="container py-3">
    <Router>
      <Cabecalho/>
      <Routes>
        <Route path="/" exact={true} element={<ListaDeFilmes filmes={filmes}/>}/>
        <Route path="/novo" exact={true} element={<FormFilme onCadastrar={cadastrarFilme}/>}/>
        <Route path="/detalhe/:id" exact={true} element={<DetalheFilme onExcluir={removerFilme}/>}/>
        <Route path="*" element={<PaginaNaoEncontrada/>}/>
      </Routes>      
    </Router>
    </div>
  );
}

export default App;
