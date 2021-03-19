import api from "./api";
export default {
  getDocentes: () => {
    return api.post("/docentes-get");
  },
};
