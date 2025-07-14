export const patchTodo = async (todoId, title, content, deadline) =>
	fetch(`http://localhost:3005/todos/${todoId}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			title,
			content,
			deadline,
		}),
	}).then((loadedUser) => loadedUser.json());
