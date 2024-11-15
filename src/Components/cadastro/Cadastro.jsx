import '../../stylesheets/cadastro/Cadastro.scss'
import logoCadastro from '../../assets/cadastre-se/logoCadastro.png'
import google from '../../assets/login/google.png'
import face from '../../assets/login/face.png'
import hotmail from '../../assets/login/hotmail.png'
import NavBar from '../NavBar/NavBar'

function Cadastro() {
    return (
        <>
        <NavBar/>
        <section className='container_cadastro'>
            <div className='foto_cadastro'>
            </div>
            <div className='lado_cadastro'>
                <div className='dentro_cadastro'>
                    <div className='logo_ageOSCadastro'>
                        <img src={logoCadastro} alt="logo AgeOS" />
                    </div> 
                    <h1 className='H1c'>Cadastre-se</h1>
                    <input type="text" placeholder='Nome' />
                    <input type="text" placeholder='Sobrenome' />
                    <input type="text" placeholder='Endereço de e-mail' />
                    <input type="text" placeholder='Senha' />
                    <input type="text" placeholder='Repita a senha' />
                    <button className='btncadastro'>Cadastre-se</button>
                    <div className='politica'>
                        <p>Ao se cadastrar, você concorda com os <span>termos de uso</span>e com nossa <span>política de privacidade</span></p>
                    </div>
                    <div className='container_contas'>
                        <p>Ou entrar usando: </p>
                        <img src={google} alt="" />
                        <img src={face} alt="" />
                        <img src={hotmail} alt="" />
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Cadastro