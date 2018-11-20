import config from "../config/config";
import axios from "axios";

const apiRoot = `http://${config.server.hostname}:${config.server.port}/${
  config.server.root ? config.server.root : ""
}`;

const getPayload = () => axios.get(`${apiRoot}payload/`);

const API = {
  getPayload
};

export default API;
