import axios from "axios";

const BASE_URL = "https://campuslife-api.cyclic.app";

export default axios.create({
    baseURL: BASE_URL,
})