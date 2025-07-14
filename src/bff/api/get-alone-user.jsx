export const getAloneUser = async (userId) =>
	fetch(`http://localhost:3005/users/${userId}`)
		.then((loadedUser) => loadedUser.json())
		.then((loadedUser) => loadedUser)
		.catch((error) => {
			return Promise.reject(error);
		});
