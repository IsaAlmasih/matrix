import axios from "axios";

export default function axiosConfig() {
  const location = window.location;
  const devOrProd =
    location.hostname === "https://000000000000.ru/"
      ? "http://api.connect.tgiek.ru/api"
      : "http://api.connect.tgiek.ru/api";
    //   Ссылка на бэк
  const user = localStorage.getItem("token");

  const instance = axios.create({
    baseURL: devOrProd,
  });

  instance.interceptors.request.use(
    (config) => {
      // Проверяем тип запроса на GET или POST
      if (config.method === "get") {
      } else if (config.method === "post") {
        config.headers["token"] = user;
        config.headers["Content-Type"] = "multipart/form-data";
      } else if (config.method === "delete") {
        config.headers["token"] = user;
      }
      return config;
    },
    (error) => Promise.reject(error),
  );

  instance.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error.response.status === 401) {
        // localStorage.clear();
        // debugger;
        // window.location.reload();
        console.log("Not auth", error);
      }
      throw error;
    },
  );

  return instance;
}
