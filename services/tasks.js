import axios from 'axios'

export const getTasks = async () => {
    const response = await axios.get(`https://reactnativetodoapp.onrender.com/api/tasks`, {
        "Content-Type": "application/json; charset=utf-8"
    })
    return response.data
}

export const postToBack = async (newObject) => {
    const req = axios.post("https://reactnativetodoapp.onrender.com/api/tasks", newObject)
    return req.then(res => res.data)
}

export const deleteTask = async (id) => {
    const req = axios.delete(`https://reactnativetodoapp.onrender.com/api/tasks/${id}`)
    return req.then(res => res.data)
}
