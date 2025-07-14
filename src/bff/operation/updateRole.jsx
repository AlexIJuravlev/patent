
import { ROLE } from "../../constant";
import { patchRole } from "../api";
import { sessions } from "../session";

export const updateRole = async (userSession, userId, role, nameJob) => {
	const accessRole = [ROLE.ADMIN];

	const access = await sessions.checkAccess(userSession, accessRole);

	if (!access) {
		return {
			error: 'Доступ запрещен',
			res: null,
		};
	}

	const usersNew =	await patchRole(userId, role, nameJob);


	return {
		error: null,
		res: usersNew,
	};
};
