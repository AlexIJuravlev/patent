import { ROLE } from "../../constant";
import { addComment, getComment, getTodo } from "../api";
import { sessions } from "../session";

export const addCommentTask = async (userSession, user, title, taskId) => {
	const accessRole = [ROLE.ADMIN, ROLE.MODERATOR, ROLE.READ];

	const access = await sessions.checkAccess(userSession, accessRole);

	if (!access) {
		return {
			error: 'Доступ запрещен',
			res: null,
		};
	}

	await addComment(user, title, taskId);

 const todo = await getTodo(taskId);
 const comment = await getComment(taskId);


	return {
		error: null,
		res: {
			...todo,
			comment
		}
	};
};
