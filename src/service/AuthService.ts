import API from '../http/AxiosConfig'
import {AxiosResponse} from "axios";
import {AxiosCheckAuth, AxiosLogin} from "../interface/AxiosRes";

class AuthService {

	async registration(email: string, password: string) {
		return API.post('/register', {email, password})
			.then((res: AxiosResponse<AxiosCheckAuth>) => {
				if (res.data?.ok) {
					localStorage.setItem('accToken', res.data?.data?.accToken)
					return res.data
				}
				return res.data
			})
	}

	async login(email: string, password: string) {
		return API.post('/login', {email, password})
			.then((res: AxiosResponse<AxiosLogin>) => {
				if (res.data?.ok) {
					localStorage.setItem('accToken', res.data.data.accToken)
					return res.data
				}
				return res.data
			})
	}

	async checkSession() {
		return API.get('/checkAuth')
			.then((res: AxiosResponse<AxiosCheckAuth>) => {
				if (res.data?.ok) {
					localStorage.setItem('accToken', res.data?.data?.accToken)
					return res.data
				}
				return res.data
			})
	}
}

export default new AuthService()
