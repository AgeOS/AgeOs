import "../../stylesheets/login/Login.scss";
import logo from "../../assets/login/logo.png";
import google from "../../assets/login/google.png";
import face from "../../assets/login/face.png";
import hotmail from "../../assets/login/hotmail.png";
import NavBar from "../NavBar/NavBar";
import axios from "axios";

function Login() {
  axios({
    method: "get",
    url: "https://backend.age-os.tech/api/users",
    responseType: "json",
  })
    .then(function (response) {
      const { email, password } = response.data;
      console.log("Email:", email);
      console.log("Password:", password);
    })
    .catch(function (error) {
      console.error("Error fetching data:", error);
    });

  return (
    <>
      <NavBar />
      <section className="container_login">
        <div className="lado_foto"></div>
        <div className="lado_login">
          <div className="dentro_login">
            <div className="logo_ageOS">
              <img src={logo} alt="logo AgeOS" />
            </div>
            <h1>Login</h1>
            <h2>Bem-vindo de volta</h2>
            <input type="text" placeholder="Endereço de e-mail" />
            <input type="text" placeholder="Senha" />

            <label className="checkbox-container">
              <input type="checkbox" />
              <p>Manter conectado</p>
            </label>
            <button>Login</button>
            <a href="#">
              <p>Esqueci minha senha</p>
            </a>
            <div className="container_contas">
              <p>Ou entre utilizando: </p>
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={google} alt="Google" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={face} alt="Facebook" />
              </a>
              <a
                href="https://www.outlook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={hotmail} alt="Hotmail" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Login;
