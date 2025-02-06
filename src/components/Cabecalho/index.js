import { Link } from "react-router-dom";
import logo from "./logo.png";
import styles from "./Cabecalho.module.css";
import LinkCabecalho from "components/LinkCabecalho";
function Cabecalho() {
  return (
    <header className={styles.cabecalho}>
      <Link to="./">
        <img src={logo} alt="logo do site" />
      </Link>
      <nav>
        <LinkCabecalho url="./">Home</LinkCabecalho>
        <LinkCabecalho url="./Favoritos">Favoritos</LinkCabecalho>
      </nav>
    </header>
  );
}
export default Cabecalho;
