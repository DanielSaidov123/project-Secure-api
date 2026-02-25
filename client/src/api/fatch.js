import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/",
});

export const registerApi = (data) => api.post("/users/registr", data);

export const loginApi = (data) => api.post("/users/login", data);

export const createNotes = (data, token) =>
  api.post("/notes/create", data, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

export const grtMyNotes = (token) =>api.get("/notes/myNotes",{
      headers: {
        Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      },
    },
  );
// const token =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5OWQ4MGZlYmI2NmRhOTRmMWE2NmY1MSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzcyMDA4NjkxLCJleHAiOjE3NzIwMTIyOTF9.jpqT1BvCDnUNjc45JCGC1zY2zGhvujSfCYoiTWwxII8"
// const result =   await grtMyNotes(token)
// console.log(result)
