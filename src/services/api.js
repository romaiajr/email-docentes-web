import axios from "axios";

export default axios.create({
  baseURL: "https://email-docentes-uefs.herokuapp.com/",
  //   baseURL: "https://nupec-web-api.herokuapp.com",
});
