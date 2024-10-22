import user from '../../assets/Usuario/Customer.png'
import escudo from '../../assets/Usuario/escudo.png'
import seguranca from '../../assets/Usuario/data.png'
import card from '../../assets/Usuario/cartao.png'

import style from '../CSS/Usuario.module.css'

function Usuario() {
    return (
       <main>
        <p className={style.sub}>Nome</p>
        <p className={style.sub2}>Nome de usuário</p>
        <p className={style.sub3}>Atualizado em 00/00/0000</p>
        <p className={style.sub4}>Gênero</p>
        <div className={style.container}>
            <aside>
            <h1 className={style.titulo2}>Configuração</h1>
            <br />
            <img className={style.user} src={user} alt="" />
            <h3>Perfil</h3>
            
            <img className={style.escudo} src={escudo} alt="" />
            <h3>Senha e segurança</h3>
            
            <img className={style.seguranca} src={seguranca} alt="" />
            <h3>Dados pessoais</h3>
            
            <img className={style.card} src={card} alt="" />
            <h3>Histórico</h3>
            </aside>
            <svg className={style.linha} width="2" height="1393" viewBox="0 0 2 1393" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 0L1 1393" stroke="black" stroke-opacity="0.3"/>
            </svg>
            <section className={style.areado}>
                    <div className={style.profil}></div>
                    <button className={style.editar}>Mudar foto</button>
                    <button className={style.editar2}>Deletar foto</button>
                    <h2>Foto de perfil</h2>
                    <div className={style.barra}></div>
                    <div className={style.barra2}></div>
                    <div className={style.barra3}></div>
                    <button className={style.editar3}>Deletar foto</button>
            </section>
        </div>
       </main>
    )
}

export default Usuario