export const userTransform = (dbUser) => ({
	login: dbUser.login,
	password: dbUser.password ,
	registedAt: dbUser.registed_at ,
	roleId: dbUser.role_id,
	id: dbUser.id,
	job: dbUser.job
}
)
