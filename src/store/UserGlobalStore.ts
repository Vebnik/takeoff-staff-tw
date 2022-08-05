import {makeAutoObservable} from "mobx";
import {UserStore} from "../interface/User";


class UserGlobalStore {

	user = {} as UserStore
	userName = '' as string
	isAccess: boolean = false

	constructor() {
		makeAutoObservable(this, {}, {deep: true})
	}

	setUser(user: UserStore) {

		this.user = {
			name: user.name,
			email: user.email,
			password: user.password,
		}
	}

	get getUser(): UserStore {
		return this.user
	}
}

export default UserGlobalStore