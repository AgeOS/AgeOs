import user from '../../assets/Usuario/Customer.png'
import escudo from '../../assets/Usuario/shield.png'
import seguranca from '../../assets/Usuario/data.png'
import card from '../../assets/Usuario/cartao.png'

import '../../stylesheets/Usuario/Usuario.scss'

function Usuario() {
    return (
       <main>
        <p className='sub'>Nome</p>
        <p className='sub2'>Nome de usuário</p>
        <p className='sub3'>Atualizado em 00/00/0000</p>
        <p className='sub4'>Gênero</p>
        <div className='container'>
            <aside>
            <h1 className='titulo2'>Configuração</h1>
            <br />
            <img className='user' src={user} alt="" />
            <h3>Perfil</h3>
            
            <img className='escudo' src={escudo} alt="" />
            <h3>Senha e segurança</h3>
            
            <img className='seguranca' src={seguranca} alt="" />
            <h3>Dados pessoais</h3>
            
            <img className='card' src={card} alt="" />
            <h3>Histórico</h3>
            </aside>
            <svg className='linha' width="2" height="1393" viewBox="0 0 2 1393" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 0L1 1393" stroke="black" stroke-opacity="0.3"/>
            </svg>
            <section className='areado'>
                    <div className='profil'></div>
                    <button className='editar'>Mudar foto</button>
                    <button className='editar2'>Deletar foto</button>
                    <h2>Foto de perfil</h2>
                    <div className='barra'></div>
                    <div className='barra2'></div>
                    <div className='barra3'></div>
                    <button className='editar3'>Deletar foto</button>
            </section>
        </div>
       </main>
    )
}

export default Usuario