import perfilIcon from "../../../assets/Usuario/customer.svg";
import segurancaIcon from "../../../assets/Usuario/shield.svg";
import dadosIcon from "../../../assets/Usuario/data-protection.svg";
import cartaoIcon from "../../../assets/Usuario/magnetic-card.svg";

export default function SideBar() {
  return (
    <>
      <div className="side-bar">
        <h2>Configuração</h2>
        <div className="side-bar-options">
          <div className="side-bar-perfil">
            <img src={perfilIcon} alt="" />
            <p>Perfil</p>
          </div>

          <div className="side-bar-seguranca">
            12
            <img src={segurancaIcon} alt="" />
            <p>Senha e Segurança</p>
          </div>

          <div className="side-bar-dados">
            <img src={dadosIcon} alt="" />
            <p>Dados Pessoais</p>
          </div>

          <div className="side-bar-historico">
            <img src={cartaoIcon} alt="" />
            <p>Histórico</p>
          </div>
        </div>
      </div>
    </>
  );
}
