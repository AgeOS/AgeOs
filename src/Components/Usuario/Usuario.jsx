import perfilIcon from "../../assets/Usuario/customer.svg";
import segurancaIcon from "../../assets/Usuario/shield.svg";
import dadosIcon from "../../assets/Usuario/data-protection.svg";
import cartaoIcon from "../../assets/Usuario/magnetic-card.svg";
import { Link } from "react-router-dom";

import "../../stylesheets/Usuario/user.scss";
import NavBar from "../NavBar/NavBar";

export default function Usuario() {
  return (
    <>
      <NavBar />

      <div className="user-info">
        <div className="side-bar">
          <h2>Configuração</h2>
          <div className="side-bar-options">
            <div className="side-bar-itens --perfil">
              <img src={perfilIcon} alt="" />
              <p>
                <Link to="/usuario">Perfil</Link>
              </p>
            </div>

            <div className="side-bar-itens --seguranca">
              <img src={segurancaIcon} alt="" />
              <p>
                <Link to="/senha">Senha e Segurança</Link>
              </p>
            </div>

            <div className="side-bar-itens --dados">
              <img src={dadosIcon} alt="" />
              <p>
                <Link to="/Dados">Dados Pessoais</Link>
              </p>
            </div>

            <div className="side-bar-itens --historico">
              <img src={cartaoIcon} alt="" />
              <p>
                <Link to="/Historico">Histórico</Link>
              </p>
            </div>
          </div>
        </div>

        <div className="user-perfil">
          <section className="user-perfil-perfil">
            <div className="user-image">
              <img
                src="data:image/png;base64,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"
                alt=""
              />
              <h3>Foto De Perfil</h3>
            </div>

            <div className="buttons">
              <button className="user-perfil-mudar-foto">Mudar Foto</button>
              <button className="user-perfil-deletar-foto">Deletar Foto</button>
            </div>
          </section>

          <section className="user-perfil-dados">
            <form action="">
              <label htmlFor="username">Nome</label>
              <input type="text" />

              <label htmlFor="userphone">Telefone</label>
              <input type="text" />

              <label htmlFor="usergener">Gênero</label>
              <select name="" id="" defaultValue="none">
                <option value="none" disabled></option>
                <option value="homem">Homem</option>
                <option value="mulher">Mulher</option>
                <option value="naoinformar">Prefiro não informar</option>
              </select>

              <div className="user-perfil-salvar-mudancas">
                <button>Salvar Mudanças</button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </>
  );
}
