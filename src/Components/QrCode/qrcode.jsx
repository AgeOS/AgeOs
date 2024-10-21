import React, { useState } from 'react';
import "../../stylesheets/qrcode/index.scss";
import "../../stylesheets/qrcode/media.scss";
import qrcode from "../../assets/qrimage/qrcode.jpeg"
import intrucpix from "../../assets/qrimage/pag.jpeg"


const Pagamento = () => {
  return (
    <div className="pagamentocontainer">
      <h1>Pagamento com pix</h1>
      <div className="pagamentoinfo">
        <div className="secaoqrcode">
          <p>Valor a pagar: 299,99</p>
          <p>Escaneie o Qr code:</p>
          <img src={qrcode} alt="Qr code para pagamento" className="qrcode" />
          <p className='validade'>Código válido por 1 dia</p>
        </div>
        <div className="intrucaopix">
          <img src={intrucpix} alt="Instruções de pagamento com Pix" className="pix-instructions" />
        </div>
      </div>
    </div>
  );
};

export default Pagamento;
