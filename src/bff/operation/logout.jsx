import { sessions } from "../session"

export const logout = (session) => {
	sessions.remove(session)
}
