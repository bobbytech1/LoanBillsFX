import axios from 'axios';

const api = axios.create({
    baseURL: 'https://70c8-102-88-81-2.ngrok-free.app/api', // Replace with your Laravel API base URL
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;