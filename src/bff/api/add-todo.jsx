export const addTodo = async (content, title, published_at, deadline, user_id) =>
	fetch(`http://localhost:3005/todos`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			title,
			content,
			published_at,
			deadline,
			user_id,
			done: false,
		}),
	}).then((createTodo) => createTodo.json());
