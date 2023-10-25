const PUBLIC_URL = process.env.PUBLIC_URL

export class AuthEndpoints {
	static login = () => `${PUBLIC_URL}/api/auth/login`

	static register = () => `${PUBLIC_URL}/api/auth/register`

	static resetPassword = () => `${PUBLIC_URL}/api/auth/reset_password`

	static refresh = () => `${PUBLIC_URL}/api/auth/refresh`

	static logout = (id: string) => `${PUBLIC_URL}/api/auth/logout/${id}`
}

export class UserEndpoints {
	static passwordForgot = () => `${PUBLIC_URL}/api/user/public/password/forgot`

	static passwordForgotChange = () =>
		`${PUBLIC_URL}/api/user/public/password/forgot/change`

	static currentUser = () => `${PUBLIC_URL}/user/current`

	static checkUser = (nickname: string) =>
		`${PUBLIC_URL}/api/user/nickname/${nickname}`

	static userId = (id: number) => `${PUBLIC_URL}/api/user/${id}`

	static userNsfw = (id: number) => `${PUBLIC_URL}/api/user/${id}/nsfw`

	static userResetPassword = (id: number) =>
		`${PUBLIC_URL}/api/user/${id}/password`

	static socialMedia = (id: number) =>
		`${PUBLIC_URL}/api/social-media/user/${id}/all`

	static wallet = () => `${PUBLIC_URL}/api/wallet`

	static balance = () => `${PUBLIC_URL}/api/balance`

	static plan = () => `${PUBLIC_URL}/api/plan`

	static planWithSubscriptionInfo = (userId: number) =>
		`${PUBLIC_URL}/api/plan/${userId}`

	static verifyEmail = () => `${PUBLIC_URL}/api/public/email/verify`
}
