
import { ROLE } from "../../constant";
import { getTodo, patchTodo } from "../api";
import { sessions } from "../session";

export const updateTodo = async (userSession, todoId, title, content, deadline) => {
	const accessRole = [ROLE.ADMIN, ROLE.MODERATOR];

	const access = await sessions.checkAccess(userSession, accessRole);

	if (!access) {
		return {
			error: 'Доступ запрещен',
			res: null,
		};
	}

	await patchTodo(todoId, title, content, deadline);

	const todo = await getTodo(todoId);

	return {
		error: null,
		res: todo,
	};
};
