export const patchCheked = async ( todoId, cheked) =>
	fetch(`http://localhost:3005/todos/${todoId}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			done: cheked,
		}),
	}).then((loadedUser) => loadedUser.json());

