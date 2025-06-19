import { getTodos } from '../api';

export const fetchTodos = async (userId) => {
	const todos = await getTodos(userId);

	if (!todos) {
		return {
			error: 'Ошибка получения данных',
			res: null,
		};
	}


	return {
		error: null,
		res: todos
	}
}
