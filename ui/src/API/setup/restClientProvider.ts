import axios, { AxiosInstance } from 'axios';

export const API_BASE_URL = 'http://localhost:8000';

export const restfulClient:AxiosInstance = axios.create({
    headers: {
        "Content-Type": 'application/json'
    }
})