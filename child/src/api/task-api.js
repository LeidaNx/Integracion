import axios from 'axios'


const deliverAPI = axios.create({
   baseURL:"http://localhost:8000/tareas/api/v1.0/tareas/"
})

export const getAllTask = () => deliverAPI.get('/');

export const getSingle = (id) => deliverAPI.get(`/${id}/`)

export const createTask = (task) => deliverAPI.post('/', task);

export const deleteTask = (id) => deliverAPI.delete(`/${id}`)

export const editTask = (id, task) => deliverAPI.put(`/${id}/`, task)
