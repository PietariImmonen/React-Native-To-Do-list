import axios from 'axios'

export const getTasks = async () => {
    const response = await axios.get(`http://localhost:3002/api/tasks`, {
        "Content-Type": "application/json; charset=utf-8"
    })
    return response.data
}

export const postToBack = async (newObject) => {
    const req = axios.post("http://localhost:3002/api/tasks", newObject)
    return req.then(res => res.data)
}

export const deleteTask = async (id) => {
    const req = axios.delete(`http://localhost:3002/api/tasks/${id}`)
    return req.then(res => res.data)
}

//https://reactnativetodoapp.onrender.com
