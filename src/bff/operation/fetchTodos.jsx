import { getAloneUser, getTodos } from '../api';

export const fetchTodos = async (userId) => {

	const user = await getAloneUser(userId)

	if(!user){
		return {
			error: 'Такого пользователя не существует',
			res: null,
		};
	}



	const todos = await getTodos(userId)
	if (!todos) {
		return {
			error: 'Ошибка получения данных',
			res: null,
		};
	}


	return {
		error: null,
		res: todos,
	};
};
