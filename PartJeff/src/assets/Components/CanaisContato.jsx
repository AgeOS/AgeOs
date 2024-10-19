import styles from "../css/CanaisContato.module.css"
import whats from "../Imagens/whats.svg"
import email from "../Imagens/email.svg"
import Contatos from "./Contatos"

function CanaisContato() {

    return (
        <section className={styles.container_canal}>
            <div className={styles.titulo}>
                <h1>Canais de contato</h1>
            </div>
            <div className={styles.atencao}>

            <Contatos
                imagem={whats}
                text={"Assistência por meio do nosso canal no WhatsApp."}
            />

            <Contatos
                imagem={email}
                text={"Atendimento por e-mail para ajudar você com dúvidas, orientações ou qualquer suporte técnico que precisar."}
            />
            </div>
        </section>
    )
}

export default CanaisContato