 import { Link } from 'react-router-dom'
import styles from './LinkCabecalho.module.css'

function LinkCabecalho ({url,children}){
    return(
        <Link to={url} className={styles.link}>
            {children}
        </Link>
    )

}
export default LinkCabecalho    