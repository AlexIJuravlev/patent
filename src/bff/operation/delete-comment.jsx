import { ROLE } from '../../constant';
import { deleteComment, getComment, getTodo } from '../api';
import { sessions } from '../session';

export const deleteCommentTask = async (userSession, taskId, commentId) => {
	const accessRole = [ROLE.ADMIN, ROLE.MODERATOR];

	const access = await sessions.checkAccess(userSession, accessRole);

	if (!access) {
		return {
			error: 'Доступ запрещен',
			res: null,
		};
	}

	await deleteComment(commentId);

	const todo = await getTodo(taskId);
	const comment = await getComment(taskId);

	return {
		error: null,
		res: { ...todo, comment },
	};
};
