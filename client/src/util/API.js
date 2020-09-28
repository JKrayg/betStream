import axios from "axios";

export default {
  getAPIs: function () {
    return axios.get("/API/bet");
  },
  getAPI: function (id) {
    return axios.get("/API/bet/" + id);
  },
  deleteAPI: function (id) {
    return axios.delete("/API/bet/" + id);
  },
  saveAPI: function (data) {
    return axios.post("/API/bet", data);
  }
};