export interface AxiosCheckAuth {
	message: string
	ok: Boolean
	data: CheckAuthData
}

export interface CheckAuthData {
	accToken: string
	id: number
	email: string
	password: string
	updatedAt: string
	createdAt: string
}

export interface AxiosContactData {
	message: string
	ok: Boolean
	data: Array<ContactData>
}

export interface ContactData {
	address: string
	avatar: string
	createdAt: string
	id: number
	name: string
	phone: string
	updatedAt: string
}

export interface AxiosLogin {
	message: string
	ok: Boolean
	data: userDataLogin
}

export interface userDataLogin {
	accToken: string
	user: {
		email: string
		password: string
		createdAt: string
		updatedAt: string
		id: number
	}
}

export interface contactDelete {
	id: number
}

export interface contactEdit {
	id: number
	payload: {
		name: string
		address: string
		avatar: string
		phone: string

	}
}