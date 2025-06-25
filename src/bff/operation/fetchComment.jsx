import { getComment } from '../api';

export const fetchComment = async (todoId) => {


	const comment = await getComment(todoId);


	return {
		error: null,
		res: {comment}
	};
};
