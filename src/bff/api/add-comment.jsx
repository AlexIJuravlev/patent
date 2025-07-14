import { nowDate } from '../utils';

export const addComment = async (user, title, taskId) => 
	fetch(`http://localhost:3005/comments`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			author_login: user,
			todos_id: taskId,
			content: title,
			publishedAt: nowDate(),
		}),
	})

