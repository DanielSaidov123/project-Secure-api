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

// const newNote = { title: "הערה חדשה", content: "תוכן ההערה" };
// const token =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5OWRiNDFhZjk2MTE0MDRiZjA5MDBkMyIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzcyMDA0ODkyLCJleHAiOjE3NzIwMDg0OTJ9.hOOnxlS-3-h-0I0g6r6mi4fYQOeRh2pLPtRjBFaeOwU"
// const result = await createNotes(newNote, token);
// console.log(result)