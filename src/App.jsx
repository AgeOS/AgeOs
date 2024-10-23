import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/home/index'
import Adquira from './Components/Adquira/Adquira'
import SobreNos from "./Components/sobrenos"; // Corrigido o nome do componente
import Suporte from "./Components/suporte/Suporte";
import './stylesheets/index.scss';
import Login from "./Components/login/Login";
import Cadastro from "./Components/cadastro/Cadastro";
import NavBar from "./Components/NavBar/NavBar";
// import NavBar from "./Components/NavBar/NavBar";
// import Pagamento from "./Components/QrCode/qrcode"
// import PagDownload from './Components/download/PagDownload'

export default function App() {
  return (
    <>
  
    <Home />  
    </>
  );
}
