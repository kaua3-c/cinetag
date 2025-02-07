import Inicio from "pages/Inicio";
import Cabecalho from "components/Cabecalho";
import Rodape from "components/Rodape";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Container from "components/Container";
import Favoritos from "pages/Favoritos";
import FavoritosProvider from "components/Contextos/Favoritos";
import Player from "components/Player";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Container>
        <FavoritosProvider>
          <Routes>
            <Route path="/" element={<Inicio />}></Route>
            <Route path="/favoritos" element={<Favoritos/>}></Route>
            <Route path='/:id' element ={<Player/>}></Route>
          </Routes>
        </FavoritosProvider>
      </Container>
      <Rodape />
    </BrowserRouter>
  );
}
export default AppRoutes;
