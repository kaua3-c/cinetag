import styles from './PaginaNaoEncontrada.module.css'


function NaoEncontrada() {
    return(
        <section className={styles.container}>
            <h2>OPA</h2>
            <h2>O conteúdo procurado não existe, ainda</h2>
        </section>
    )
}

export default NaoEncontrada