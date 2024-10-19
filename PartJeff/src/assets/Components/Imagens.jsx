import styles from "../css/Imagens.module.css"
import svgPessoas from "../Imagens/imgs.svg"
function Imagens(){
    return(
        <div className={styles.container_imagens}>
            <img src={svgPessoas} alt="" />
        </div>


    )


}

export default Imagens