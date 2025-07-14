import { getTodo, getComment } from '../api';

export const fetchTodo = async ( todoId) => {
	const todos = await getTodo(todoId);

	if (!todos) {
		return {
			error: 'Ошибка получения данных',
			res: null,
		};
	}

	const comment = await getComment(todoId);

	return {
		error: null,
		res: {
			...todos,
			comment
		}
	}
}
