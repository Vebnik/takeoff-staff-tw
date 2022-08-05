export interface UserStore {
	name: string
	email: string
	password: string
}

export interface Contact {
	name: string
	phone: string
	address: string
	avatar: string
	id: number
}

export interface CreateContact {
	name: string
	phone: string
	address: string
	avatar: string
}