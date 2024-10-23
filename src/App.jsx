import { BrowserRouter , Router , Routes , Route  } from 'react-router-dom';
// import NavBar from "./Components/NavBar/NavBar";
import './stylesheets/index.scss'

import Home from './Components/home/index'
import SobreNos from "./Components/sobrenos"; // Corrigido o nome do componente
import Suporte from "./Components/suporte/Suporte";
import Login from "./Components/login/Login";
import Cadastro from "./Components/cadastro/Cadastro";
import Adquira from './Components/Adquira/Adquira'

export default function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="./" element={<Home />} />
        <Route path="./Sobrenos" element={<SobreNos />} />
        <Route path="./Aquira" element={<Adquira />} />
        <Route path="./Suporte" element={<Suporte />} />
        <Route path="./Login" element={<Login />} />
        <Route path="./Cadastro" element={<Cadastro />} />
      </Routes>
    </Router>

    <Home/>


    </>
  );
}
