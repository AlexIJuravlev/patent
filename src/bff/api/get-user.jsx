import { userTransform } from "../transformer";

export const getUser = async (login) => 
	fetch(`http://localhost:3005/users/?login=${login}`)
		.then((loadedUser) => loadedUser.json())
		.then(([loadedUser]) => loadedUser && userTransform(loadedUser));

