import axios from "axios";

const api = axios.create({
    baseURL:"http://localhost:2029/"
});

export default api;