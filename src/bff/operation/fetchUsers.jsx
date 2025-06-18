import {  getUsers } from "../api"

export const fetchUsers = async () => {

	const users = await getUsers()

	if(!users){
		return {
			error: 'Ошибка получения данных',
			res: null
		}
	}

	return {
		error: null,
		res: users.map(({ id, job, login, role_id }) => ({ id, job, login, role_id }))

	};
}
