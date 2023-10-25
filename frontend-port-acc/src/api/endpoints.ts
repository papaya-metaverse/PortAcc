const PUBLIC_URL = process.env.NEXT_PUBLIC_PUBLIC_URL

export class AuthEndpoints {
	static login = () => `${PUBLIC_URL}/api/auth/login`

	static register = () => `${PUBLIC_URL}/api/auth/register`

	static resetPassword = () => `${PUBLIC_URL}/api/auth/reset_password`

	static refresh = () => `${PUBLIC_URL}/api/auth/refresh`

	static logout = (id: string) => `${PUBLIC_URL}/api/auth/logout/${id}`
}

export class UserEndpoints {
	static currentUser = () => `https://portacc.papaya.ws/api/user/current`

	// static userId = (id: number) => `${PUBLIC_URL}/api/user/${id}`
}
