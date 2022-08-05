import API from "../http/AxiosConfig";
import {AxiosResponse} from "axios";
import {AxiosContactData, contactDelete, contactEdit} from "../interface/AxiosRes";
import {CreateContact} from "../interface/User";

//TODO Переписать все any types и AxiosResponse указать конкретный generic type

class UserService {

	async getPosts() {
		return API.get('/posts')
			.then((res: AxiosResponse<AxiosContactData>) => res.data)
	}

	async createPosts(postPayload: CreateContact) {
		return API.post('/posts', postPayload)
			.then((res: AxiosResponse) => res.data)
	}

	async deletePosts(postData: contactDelete) {
		return API.delete('/posts', {data: postData})
			.then((res: AxiosResponse) => res.data)
	}

	async editPosts(postData: contactEdit) {
		return API.patch('/posts', postData)
			.then((res: AxiosResponse) => res.data)
	}
}

export default new UserService()