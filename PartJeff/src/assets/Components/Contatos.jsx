import styles from "../css/Contatos.module.css"

function Contatos({ imagem, text }) {
    return (
        <div className={styles.container}>
            <img src={imagem} alt="" />
            <p className={styles.text}>
                {text}
            </p>
            <button><p>Clique Aqui</p></button>
        </div>

    )

}
export default Contatos