
import { ROLE } from "../../constant";
import { addTodo } from "../api";
import { sessions } from "../session";

export const addTodos = async (userSession, content, title, published_at, deadline, user_id) => {
	const accessRole = [ROLE.ADMIN, ROLE.MODERATOR];

	const access = await sessions.checkAccess(userSession, accessRole);


	if (!access) {
		return {
			error: 'Доступ запрещен',
			res: null,
		};
	}

	const todo = await addTodo(content, title, published_at, deadline, user_id);


	return {
		error: null,
		res: todo,
	};
};
