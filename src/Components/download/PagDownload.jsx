import "../../stylesheets/download/Download.scss";
import logoAgeOS from "../../assets/download/logoAgeOs.png";
// import Navbar from "../NavBar/NavBar";

function PagDownload() {
  return (
    <div className="download-page">
      {/* <Navbar /> */}

      <section className="container_download">
        <div className="quadrado_download">
          <div className="download">
            <h1>Dowload AgeOS</h1>
          </div>
          <div className="dentro_download">
            <div className="celular"></div>

            <div className="lado_instrucoes">
              <h2>Instalação</h2>
              <p>1. Baixe o aplicativo em seu e-mail</p>
              <p>2. Faça a instalação.</p>
              <p>3. Na tela de inicio, parecerá a AgeOS como opção.</p>
              <p>4. insira o código.</p>
              <p>5. Pronto para uso.</p>
              <a href="#">
                <button>Enviar Email</button>
              </a>
            </div>
          </div>
          <div className="ageOS_informacoes">
            <img src={logoAgeOS} alt="" />
            <div className="informacoes">
              <p>
                <span>Data da versão:</span> 16-08-2024
              </p>
              <p>
                <span>Tamanho do sistema:</span> 103.06 MB
              </p>
            </div>
          </div>

          <div className="ageOS_informacoes2">
            <h2>AgeOS documentação</h2>
            <div className="documentacao">
              <p>ARM x64</p>
              <p>ARM x86</p>
              <p>GAPS instalado.</p>
            </div>

            <div className="aviso">
              <p>
                AgeOS Premium existe a opção de acesso antecipado onde pode
                ocorrer a liberação ARM X86.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default PagDownload;
