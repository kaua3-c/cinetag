import styles from "./Card.module.css";
import iconeFavoritar from "./favoritar.png";

function Card({ id, titulo, capa }) {
  return (
    <div className={styles.div}>
      <img src={capa} alt="titulo" className={styles.capa}></img>
      <h2>{titulo}</h2>
      <img
        src={iconeFavoritar}
        alt="favoritar video"
        className={styles.favoritar}
      ></img>
    </div>
  );
}
export default Card;
