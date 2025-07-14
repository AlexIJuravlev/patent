export const patchRole = async (userId, role, nameJob) =>
	fetch(`http://localhost:3005/users/${userId}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			role_id: role,
			job: nameJob,
		}),
	}).then((loadedUser) => loadedUser.json());
