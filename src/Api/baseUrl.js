import axios from "axios";

export const baserUrl = axios.create({ baseURL: "http://localhost:8000" });
