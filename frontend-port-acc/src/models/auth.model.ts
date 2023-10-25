interface ITokens {
	accessToken: string
	refreshToken: string
}

export interface IErrorResponses {
	error: string
	status: number
}

export interface ILoginParams {
	email: string
	password: string
}

export interface IRegisterParams {
	email: string
	password: string
	// TODO: расширить если надо
	nickname: string
	// firstname: string
	// lastname: string
	// birthday: string
	// bio: string
	// referralUserId: number
}

// TODO: расширить по необходимости
export interface IAuthUser {
	id: number
	nickname: string
	firstname: string
	lastname: string
	email: string
	birthday: string
	password: string
	bio: string
	walletAddress: string
	numberOfReferrals: string
	// TODO: переделать на enum
	role: string
}

export interface ILoginRegisterResponses {
	user: IAuthUser
	tokens: ITokens
}

export interface IResetPasswordParams {
	email: string
}

export interface INewPasswordParams {
	password: string
	token: string
}
