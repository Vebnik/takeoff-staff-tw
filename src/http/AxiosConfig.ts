import axios, { AxiosInstance, AxiosRequestConfig } from "axios"


const ROOT_API = 'http://localhost:5000/api'

const API: AxiosInstance = axios.create({
	withCredentials: true,
	baseURL: ROOT_API
})

API.interceptors.request.use((cfg: AxiosRequestConfig): AxiosRequestConfig => {

	// Check headers in request
	if (!cfg.headers) return cfg

	cfg.headers.Authorization = localStorage.getItem('accToken')
		? `Bearer ${localStorage.getItem('accToken')}`
		: `Bearer `

	return cfg
})

export default API