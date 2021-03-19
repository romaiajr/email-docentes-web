import api from "./api";
export default {
  addNotFound: (obj) => {
    return api.post("/nao-encontrado-add", obj);
  },
  getNotFound: (obj) => {
    return api.post("/nao-encontrado-get");
  },
};
