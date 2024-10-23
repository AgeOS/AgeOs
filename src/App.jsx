import { BrowserRouter , Router , Routes , Route  } from 'react-router-dom';
// import NavBar from "./Components/NavBar/NavBar";
import Home from './Components/home/index'
import SobreNos from "./Components/sobrenos"; // Corrigido o nome do componente
import Suporte from "./Components/suporte/Suporte";

// import './stylesheets/index.scss';
import Login from "./Components/login/Login";
// import Cartao from './Components/Cartao/Cart'
import Cadastro from "./Components/cadastro/Cadastro";
//import Pagamento from "./Components/QrCode/qrcode"
import Adquira from './Components/Adquira/Adquira'
export default function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="./" element={<Home />} />
        <Route path="/Sobrenos" element={<SobreNos />} />
        <Route path="/Aquira" element={<Adquira />} />
        <Route path="/Suporte" element={<Suporte />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Cadastro" element={<Cadastro />} />
      </Routes>
    </Router>
    </>
  );
}
