import { ROLE } from '../../constant';
import { deleteComment, deleteTaskAsync, getComment } from '../api';
import { sessions } from '../session';

export const deleteTask = async (userSession, id) => {
	const accessRole = [ROLE.ADMIN, ROLE.MODERATOR];

	const access = await sessions.checkAccess(userSession, accessRole);

	if (!access) {
		return {
			error: 'Доступ запрещен',
			res: null,
		};
	}

	await deleteTaskAsync(id);

	const comment = await getComment(id);

	await Promise.all(comment.map(({ id: commentId }) => deleteComment(commentId)));
	// await deleteComment(id)

	return {
		error: null,
		res: true,
	};
};
