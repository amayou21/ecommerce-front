import axios from "axios";

export const baserUrl = axios.create({ baseURL: "http://localhost:8001" });
// export const baserUrl = axios.create({ baseURL: "https://secoplat-802f1ded97c5.herokuapp.com" });
