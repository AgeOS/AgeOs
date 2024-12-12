import pix from "../../assets/PaginaPix/pix.png";
import PropTypes from "prop-types";

import "../../stylesheets/PaginaPix/pix.scss";
import NavBar from "../NavBar/NavBar";
// import QrCodeComponent from "../pix/pix";
// import Pagamento from "../QrCode/qrcode";
function PaginaPix() {
  return (
    <>
      <NavBar />
      <div className="pagina-de-pix">
        <div className="card-pix">
          <h1>Pagamento com Pix</h1>
          <h4>Valor de</h4>

          <img src={pix} alt="" />
          {/* <div className="pix">
            <QrCodeComponent
              chavePix="15241948406"
              valor="1.00"
              nomeRecebedor="kaique alves da silva"
              cidadeRecebedor="Sao Paulo"
            />
          </div> */}

          <h4>Código válido por 1 dia</h4>
        </div>
      </div>
    </>
  );
}

// PaginaPix.propTypes = {
//   valor: PropTypes.number.isRequired,
// };

export default PaginaPix;
