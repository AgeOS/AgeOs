import { Routes, Route } from "react-router-dom";
// import NavBar from "./Components/NavBar/NavBar";
import "./stylesheets/index.scss";

// import NavBar from './Components/NavBar/NavBar';
import Home from "./Components/home/home";
import Adquira from "./Components/Adquira/Adquira";
import SobreNos from "./Components/sobrenos";
import Suporte from "./Components/suporte/Suporte";
import Login from "./Components/login/Login";
import Cadastro from "./Components/cadastro/Cadastro";
import Usuario from "./Components/Usuario/Usuario";
import Senha from "./Components/Usuario/Senha/Senha";
import Dados from "./Components/Usuario/Dados/Dados";
import Historico from "./Components/Usuario/Historico/Historico";
import PagDownload from "./Components/download/PagDownload";

// import Usuario from "./Components/Usuario/Usuario";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Adquira" element={<Adquira />} />
        <Route path="/Sobrenos" element={<SobreNos />} />
        <Route path="/Suporte" element={<Suporte />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/Usuario" element={<Usuario />} />
        <Route path="/Senha" element={<Senha />} />
        <Route path="/Dados" element={<Dados />} />
        <Route path="/Historico" element={<Historico />} />
        <Route path="/download" element={<PagDownload />} />
      </Routes>
    </>
  );
}
