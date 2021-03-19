import api from "./api";
export default {
  getDocentes: () => {
    return api.post("/docentes-get");
  },
  // addArtigo: (obj) => {
  //   return api.post("/artigos-add", obj);
  // },
  // removeArtigo: (obj) => {
  //   return api.post("/artigos-remove", { data: obj });
  // },
};
