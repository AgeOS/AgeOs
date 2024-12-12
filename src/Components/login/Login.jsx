// import "../../stylesheets/login/Login.scss";
// import logo from "../../assets/login/logo.png";
// import google from "../../assets/login/google.png";
// import face from "../../assets/login/face.png";
// import hotmail from "../../assets/login/hotmail.png";
// import NavBar from "../NavBar/NavBar";
// // import checkConnection from "../../services/api";
// import { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// // import api from "../../services/api";

// function Login() {
//   const [dados, setDados] = useState(null);
//   const [carregando, setCarregando] = useState(true);
//   const [erro, setErro] = useState(null);
//   // const handleLogin = async () => {
//   //   try {
//   //     const response = await api.get("/users");
//   //     console.log(response.data);
//   //   } catch (error) {
//   //     console.error("Erro:", error);
//   //   }
//   // };

//   // checkConnection().then((online) => {
//   //   console.log("Servidor está:", online ? "online" : "offline");
//   // });

//   const apiUrl = "https://backend.age-os.tech/api/users";

//   useEffect(() => {
//     // Função para buscar dados
//     const buscarDados = async () => {
//       try {
//         // Configuração do fetch
//         const resposta = await fetch(apiUrl, {
//           method: "GET", // Método da requisição
//           headers: {
//             "Content-Type": "application/json",
//             // Se precisar de autorização
//             Authorization: `Bearer ${"MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCo8z64rMqnbSZt\nzIt8ecLRV8rV8oXKbdnky5iM/Wl+C8ZdfqHjGRGFiDHXPhV8IEqkd0j/cjMvxZO6\n4aF+bTkjYkmypI2znvtzKemdz9JdW1XScyq0U49zmbMN83rSjkCOm+IAejNp3gub\nLC++APnMPXMlFTNhe3SGg6C0J2Voc1RXXJ/O6x4PgK60/8oxmgWHGalN7S5MOtic\nKNm9HnahJAfc+caAaCtI0sAir8N3e9ND0U6+cEwygf/pxnNSXap65SrcW1pSWgQQ\nbJPppfpsp05CPIorsJlGNtm+Ykh6VWjqAtok+CtAHjN5EVd6y+FImOdRJMtpR5a0\nVzVKSnWNAgMBAAECggEARnIqiHlwBLDD8ct0q+HfZEe9iUkXFUmJrddg1AUEPCzv\nuONI4Db/MdUQpyW5cqjKRtqAIxc8laJGD4nuOxeS2BivDyCC/07+nM3wnb9egVPI\nrLgdqdQfv/1qBhqsb2gmLfB8o2NQ1cdiwoCBpbGlds52mRNGedKuyznOQ+Abbhne\n+CAhkssVKIBXrYtSr22rGo7pS0KBS7bvOMLQ6OZTfyLgoVniwXCCR/a3MSSatxXo\nTN4yWDv3Ud6rwgvEDUCle+LjJiQgBcb7hExGWxRjeIwwSus93fb4iVD4IBH3jjUP\n6kv8u9Pw2d1zGBLC3b8ltP0qA3X+n4lwV0NNZeXmRwKBgQDFUF4RAd4PuvkIY2AM\nFs5qR9eHrwaDrUo6y1tGTuVrXHz0LluK4UWXz8azhxHffgJJ8uk2iyIUdcG3+uF2\n28paeKoel0Udu+8Ux+ijImIq/G9ijoNIogGgiwt02OkuI7+7R9ychBPm8BmsQzVl\nPsi+o7K1KXJ3O6Ty8kFbe7EJ1wKBgQDbMz1KQmB3VmdMtCiegN4tt3rxAyDpqEq5\nnSpJYd+S8+n9zPAoIfppnH8Q2SrvSh1ytnLSS6tXfgpdDT9JCeSlHlO7mGtIx/wb\nL0eIcQOpPqxZowZHVILY7sr7XQBBtNirSIZW4wny4Gz0sQwwNat7dA8vuj91vB7M\nKnzlD6A3OwKBgCP0Pw/OTU6EfXh/0zKgvUA0kxuQUxmPbCVGhP1MxxVHJyW/hMLL\nxcih/c0c4a7d4UDkWIat16nuwzvpJUhpSHgv4J/uZJPEeQ5KVyPS0hyPHyTQXy/P\nBYjhjVbfZ64WqYtQzuxeTNoaCjOPk509UYsbfSbxxH/hiG8UocAvy9TFAoGAabqG\nVpo7o3Q2sUW4zfNEt3Jnx3aF2o5FNNB9BBZEW8Jw2+2M7R6uhWBp3buSPQdXuuwL\n6Cl9hN8TqpxoKRevhIFjS/oRzXJAxPACJeq1JF5JjZbXwXIfBvnvSF0scYUEeWGr\nAp/SPadIhqIbSempRAvQA2pnj6dkh3/67BWkZt8CgYAXo3nnucgg4WWPJsJsp7yM\nSdkEQZ+zHWBGLyX2yzp+wk4T5ddniSTJjabhQSoPo3YY8wgvxuWA3xNjMjfJAyiw\ntjJggLb/YoucrRm6Yci2deYkI/VUpw5Qeo7Qurbz9xpY5eIi9u3rvzgb5CVAryqk\nxM+RVUKPCncu++zBwJrVAQ=="}`,
//           },
//         });

//         // Verificar se a resposta foi bem-sucedida
//         if (!resposta.ok) {
//           throw new Error("Erro na requisição");
//         }

//         // Converter resposta para JSON
//         const dadosJson = await resposta.json();

//         // Atualizar estado com os dados
//         setDados(dadosJson);
//         setCarregando(false);
//       } catch (error) {
//         // Tratar erros
//         setErro(error.message);
//         setCarregando(false);
//       }
//     };

//     // Chamar função de busca
//     buscarDados();
//   }, []);

//   return (
//     <>
//       <NavBar />

//       <section className="container_login">
//         <div className="lado_foto"></div>
//         <div className="lado_login">
//           <div className="dentro_login">
//             <div className="logo_ageOS">
//               <img src={logo} alt="logo AgeOS" />
//             </div>
//             <h1>Login</h1>
//             <h2>Bem-vindo de volta</h2>
//             {/* {loading && <p>Carregando...</p>}
//             {error && <p className="error">{error}</p>} */}

//             {/* Renderizar dados */}
//             <div>
//               {/* Renderizar dados */}
//               {dados && (
//                 <ul>
//                   {dados.map((item) => (
//                     <li key={item.name}>{item.email}</li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//             <input type="text" placeholder="Endereço de e-mail" />
//             <input type="text" placeholder="Senha" />

//             <label className="checkbox-container">
//               <input type="checkbox" />
//               <p>Manter conectado</p>
//             </label>
//             <button>Login</button>
//             <a href="#">
//               <p>Esqueci minha senha</p>
//             </a>
//             <div className="container_contas">
//               <p>Ou entre utilizando: </p>
//               <a
//                 href="https://www.google.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <img src={google} alt="Google" />
//               </a>
//               <a
//                 href="https://www.facebook.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <img src={face} alt="Facebook" />
//               </a>
//               <a
//                 href="https://www.outlook.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <img src={hotmail} alt="Hotmail" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Login;

import { useState, useEffect } from "react";

function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const buscarUsuarios = async () => {
      try {
        // Recupera o token do localStorage
        // const token = localStorage.getItem("token");

        const resposta = await fetch("https://backend.age-os.tech/api/users", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            // Adiciona autorização se tiver token
            Authorization: `Bearer ${"5bc9402b626006dc92fe3908efcda3fa34ad7ce7"}`,
          },
        });

        // Verifica se a resposta foi bem-sucedida
        if (!resposta.ok) {
          throw new Error("Erro ao buscar usuários");
        }

        const dadosUsuarios = await resposta.json();
        setUsuarios(dadosUsuarios);
        setCarregando(false);
      } catch (error) {
        setErro(error.message);
        setCarregando(false);
      }
    };

    buscarUsuarios();
  }, []); // Array vazio para executar apenas uma vez

  // Estados de carregamento e erro
  if (carregando) {
    return <div>Carregando usuários...</div>;
  }

  if (erro) {
    return <div>Erro: {erro}</div>;
  }

  // Renderização da lista de usuários
  return (
    <div>
      <h1>Lista de Usuários</h1>
      {usuarios.length === 0 ? (
        <p>Nenhum usuário encontrado</p>
      ) : (
        <ul>
          {usuarios.map((usuario) => (
            <li key={usuario.id}>
              {usuario.name} - {usuario.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListaUsuarios;
