import api from "./api";
export default {
  addWrongEmail: (obj) => {
    return api.post("/email-errado-add", obj);
  },
};
