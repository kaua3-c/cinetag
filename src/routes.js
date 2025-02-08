import Inicio from "pages/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Favoritos from "pages/Favoritos";
import Player from "components/Player";
import NaoEncontrada from "pages/PaginaNaoEncontrada";
import PaginBase from "components/PaginaBase";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginBase />}>
          <Route index element={<Inicio />}></Route>
          <Route path="favoritos" element={<Favoritos />}></Route>
          <Route path=":id" element={<Player />}></Route>
          <Route path="*" element={<NaoEncontrada />} />
          <Route />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default AppRoutes;
