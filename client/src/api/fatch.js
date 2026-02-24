import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/",
});
 
export const registerApi = (data) => api.post("/users/registr", data);

export const loginApi = (data) => api.post("/users/login", data);

export const createNotes = (data) => api.post("/notes/create", data);

const s = await loginApi({ email: "dsadsa", password: "12345678" });
console.log()