import '../../stylesheets/login/Login.scss'
import logo from '../../assets/login/logo.png'
import google from '../../assets/login/google.png'
import face from '../../assets/login/face.png'
import hotmail from '../../assets/login/hotmail.png'

function Login() {
    return (
        <section className='container_login'>
            <div className='lado_foto'>
            </div>
            <div className='lado_login'>
                <div className='dentro_login'>
                    <div className='logo_ageOS'>
                        <img src={logo} alt="logo AgeOS" />
                    </div>
                    <h1>Login</h1>
                    <h2>Bem-vindo de volta</h2>
                    <input type="text" placeholder='Endereço de e-mail' />
                    <input type="text" placeholder='Senha' />

                    <label className="checkbox-container">
                        <input type="checkbox" />
                        <p>Manter conectado</p>
                    </label>
                    <button>Login</button>
                    <a href="#"><p>Esqueci minha senha</p></a>
                    <div className='container_contas'>
                        <p>Ou entrar usando: </p>
                        <img src={google} alt="" />
                        <img src={face} alt="" />
                        <img src={hotmail} alt="" />
                    </div>

                </div>

            </div>

        </section>
    )
}
export default Login