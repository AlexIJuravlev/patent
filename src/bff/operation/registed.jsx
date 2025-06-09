import { addUser, getUser } from "../api/"
import { sessions } from "../session"

export const register = async(loginReg, passReg) => {
		const existedUser = await getUser(loginReg)

		if(existedUser) {
			return {
				error: 'Такой пользователь есть',
				res: null
			}
		}

		const user = await addUser(loginReg, passReg)

		return {
			error: null,
			res: {
				session: sessions.create(user),
				id: user.id,
				login: user.login,
				roleId: user.role_id
			}
		}
}
