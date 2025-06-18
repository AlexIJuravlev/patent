
export const getUsers = async () =>
	fetch(`http://localhost:3005/users/`)
		.then((loadedUser) => loadedUser.json())
		.then((loadedUser) => loadedUser);
