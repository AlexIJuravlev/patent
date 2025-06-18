import {  getComment, getTodos } from '../api';

export const fetchTodos = async (userId) => {
	const todos = await getTodos(userId);

	if (!todos) {
		return {
			error: 'Ошибка получения данных',
			res: null,
		};
	}

	const coments = await getComment(userId)

	console.log(coments);
	console.log(todos);

	return {
		error: null,
		res: {todos, coments}
}
}
