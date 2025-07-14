
import { ROLE } from "../../constant";
import { patchCheked } from "../api";
import { sessions } from "../session";

export const updateCheked = async (userSession, id, isCheked) => {

	const accessRole = [ROLE.ADMIN, ROLE.MODERATOR]

	const access = await sessions.checkAccess(userSession, accessRole)

	if (!access) {
		return {
			error: 'Доступ запрещен',
			res: null,
		};
	}


	patchCheked(id, isCheked);

	return {
		error: null,
		res: !true,
	};
};
