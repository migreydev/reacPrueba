import axios from 'axios';

const baseURL = 'http://localhost:3000/';

const apiService = axios.create({
    baseURL,
});

export const getTask = (taskId) => {
    return apiService.get(`task/${taskId}`);
};

export const getTaskId = (id) => axios.get(`${baseURL}/${id}`);

export const getTasks = () => {
    return apiService.get(`tasks`);
}

export const createTask = (postData) => {
    return apiService.post('tasks/',postData);
};

export const deleteTask = (taskId) => {
    return apiService.delete(`tasks/${taskId}`);
};