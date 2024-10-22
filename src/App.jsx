import NavBar from "./Components/NavBar/NavBar";
// import Home from './Components/home/index'
// import SobreNos from "./Components/sobrenos"; // Corrigido o nome do componente
// import Suporte from "./Components/suporte/Suporte";
// import './stylesheets/index.scss';
// import Login from "./Components/login/Login";
//import Cadastro from "./Components/cadastro/Cadastro";
// import Pagamento from "./Components/QrCode/qrcode"
import PagDownload from "./Components/download/PagDownload";

export default function App() {
  return (
    <>
      <NavBar />
      <PagDownload />
    </>
  );
}
