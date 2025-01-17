import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:8000/api/project", 
    withCredentials: true,
  });

  export const createProject=(data)=>API.post('/createproject',data)
  export const getProject=()=>API.get('/getprojects')
  export const getProjectId=(id)=>API.get(`/getprojectbyid/${id}`)
  export const deleteProject=(id)=>API.delete(`/deleteProject/${id}`)
  export const userLogin=(username,password)=>API.post('/login',{username,password})
  
