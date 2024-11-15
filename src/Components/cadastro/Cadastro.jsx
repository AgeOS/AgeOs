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
    <p>Ao se cadastrar, você concorda com os <a href="/termos-de-uso"><span className="link-terms">termos de uso</span></a> e com nossa <a href="/politica-de-privacidade"><span className="link-privacy">política de privacidade</span></a></p>
</div>

<div className='container_contas'>
    <p>Ou entre utilizando: </p>
    <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
        <img src={google} alt="Google" />
    </a>
    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <img src={face} alt="Facebook" />
    </a>
    <a href="https://www.outlook.com" target="_blank" rel="noopener noreferrer">
        <img src={hotmail} alt="Hotmail" />
    </a>
</div>

                </div>
            </div>
        </section>
        </>
    )
}

export default Cadastro