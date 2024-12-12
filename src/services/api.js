// // api.js
// import axios from "axios";

// // Função melhorada para verificar conectividade
// const checkConnection = async () => {
//   try {
//     const controller = new AbortController();
//     const timeoutId = setTimeout(() => controller.abort(), 5000);

//     const response = await fetch("https://backend.age-os.tech/api/users", {
//       signal: controller.signal,
//       method: "GET",
//       mode: "cors",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     clearTimeout(timeoutId);

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     console.log("Status do servidor:", response.status);
//     return true;
//   } catch (error) {
//     console.error("Erro de conexão:", error.message);
//     return false;
//   }
// };

// // Configuração do axios com retry
// const api = axios.create({
//   baseURL: "https://backend.age-os.tech/api/users",
//   timeout: 10000,
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
//   // Retry configuration
//   retry: 3,
//   retryDelay: (retryCount) => {
//     return retryCount * 1000;
//   },
// });

// // Log detalhado de erros
// api.interceptors.request.use(
//   async (config) => {
//     const isConnected = await checkConnection();
//     if (!isConnected) {
//       throw new Error("Sem conexão com o servidor");
//     }
//     console.log("Requisição:", {
//       url: config.url,
//       method: config.method,
//       headers: config.headers,
//     });
//     return config;
//   },
//   (error) => {
//     console.error("Erro na requisição:", error);
//     return Promise.reject(error);
//   }
// );

// api.interceptors.response.use(
//   (response) => {
//     console.log("Resposta:", {
//       status: response.status,
//       data: response.data,
//     });
//     return response;
//   },
//   (error) => {
//     console.error("Erro detalhado:", {
//       message: error.message,
//       code: error.code,
//       response: error.response?.data,
//     });
//     return Promise.reject(error);
//   }
// );

// export default api;
