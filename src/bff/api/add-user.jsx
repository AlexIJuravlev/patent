import { ROLE_TITLE } from "../../constant";
import { nowDate } from "../utils";

export const addUser = async (login, password) =>
	fetch(`http://localhost:3005/users`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			login,
			password,
			registed_at: nowDate(),
			role_id: 2,
			job: ROLE_TITLE.READ
		}),
	}).then((loadedUser) => loadedUser.json());

