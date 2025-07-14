
import { ROLE } from "../../constant";
import { patchContent } from "../api";
import { sessions } from "../session";

export const updateContent = async (userSession, id, comment) => {

	const accessRole = [ROLE.ADMIN, ROLE.MODERATOR, ROLE.READ]

	const access = await sessions.checkAccess(userSession, accessRole)

	if (!access) {
		return {
			error: 'Доступ запрещен',
			res: null,
		};
	}

	patchContent(id, comment);

	return {
		error: null,
		res: comment,
	};
};
