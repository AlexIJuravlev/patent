export const patchContent = async (todoId, comment) =>
	fetch(`http://localhost:3005/todos/${todoId}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			content: comment,
		}),
	}).then((loadedUser) => loadedUser.json());
