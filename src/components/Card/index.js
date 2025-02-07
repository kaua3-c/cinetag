
import styles from "./Card.module.css";
import iconeFavoritar from "./favoritar.png";
import { useFavoritoContext } from "components/Contextos/Favoritos";
import iconeDesfavoritar from './desfavoritar.png'

function Card({ id, titulo, capa }) {
  const {favorito, adicionarFavorito} = useFavoritoContext();
  const eFavorito = favorito.some((favo) => favo.id === id);
  const icone = !eFavorito ? iconeFavoritar : iconeDesfavoritar ;
  return (
    <div className={styles.div}>
      <img src={capa} alt="titulo" className={styles.capa}></img>
      <h2>{titulo}</h2>
      <img
        src={icone}
        alt="favoritar video"
        className={styles.favoritar}
        onClick={() =>{adicionarFavorito(
          {id, titulo, capa}
        )}}
      ></img>
    </div>
  );
}
export default Card;
