import { ROLE } from "../../constant";
import { getRoles } from "../api";
import { sessions } from "../session";

export const fetchRole = async (userSession) => {
	const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR]

	const access = await sessions.checkAccess(userSession, accessRoles)

	if (!access) {
		return {
			error: 'Доступ запрещен',
			res: null,
		};
	}

	const roles = await getRoles()

	return {
		error: null,
		res: roles,
	};
};
