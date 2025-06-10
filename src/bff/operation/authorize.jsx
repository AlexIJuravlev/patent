import { getUser } from "../api"
import { sessions } from "../session"

export const authorize = async (loginUser, passwordUser) => {
	const user = await getUser(loginUser)
	console.log('user',user);


	if(!user){
		return {
			error: 'Такой пользователь не найден',
			res: null,
		}
	}

	const {id, login, password, roleId} = user

	if(password !== passwordUser){
		return {
			error: 'Неверный пароль',
			res: null,
		};
	}

	return {
		error:null,
		res: {
			session: sessions.create(user),
			id,
			login,
			roleId
		}
	}
}
