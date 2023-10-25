import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import {
	IAuthUser,
	IErrorResponses,
	ILoginRegisterResponses,
} from '@/models/auth.model'
import localStorageAvailable from '@/utils/localStorageAvailable'
import {
	NICK_NAME,
	REFRESH_KEY,
	TOKEN_KEY,
	EMAIL,
	USER_ID,
} from '@/constants/auth'
import { setCookie } from '@/utils/cookies'

const storageAvailable = localStorageAvailable()
let token = ''
let refreshToken = ''
let nickName = ''
let email = ''
let id = 0

if (storageAvailable) {
	token = localStorage.getItem(TOKEN_KEY) ?? ''
	refreshToken = localStorage.getItem(REFRESH_KEY) ?? ''
	nickName = localStorage.getItem(NICK_NAME) ?? ''
	email = localStorage.getItem(EMAIL) ?? ''
	id = Number(localStorage.getItem(USER_ID)) ?? ''
}

interface IAuthState {
	token: string
	refreshToken: string
	isLoading: boolean
	error: string
	isAuth: boolean
	nickName: string
	email: string
	id: number
}

const initialState: IAuthState = {
	isLoading: false,
	error: '',
	isAuth: Boolean(token),
	token: token,
	refreshToken: refreshToken,
	nickName: nickName,
	email: email,
	id: id,
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		authFetching: state => {
			state.isLoading = true
		},
		authFetchingSuccess: (
			state,
			action: PayloadAction<ILoginRegisterResponses>
		) => {
			state.isLoading = false
			state.isAuth = true
			state.error = ''
			state.token = action.payload.tokens.accessToken
			state.refreshToken = action.payload.tokens.refreshToken
			state.nickName = action.payload.user.nickname
			state.email = action.payload.user.email
			state.id = action.payload.user.id

			localStorage.setItem(TOKEN_KEY, action.payload.tokens.accessToken)
			localStorage.setItem(REFRESH_KEY, action.payload.tokens.refreshToken)
			localStorage.setItem(NICK_NAME, action.payload.user.nickname)
			localStorage.setItem(EMAIL, action.payload.user.email)
			localStorage.setItem(USER_ID, String(action.payload.user.id))

			setCookie(TOKEN_KEY, action.payload.tokens.accessToken)
			setCookie(REFRESH_KEY, action.payload.tokens.refreshToken)
		},
		authFetchingError: (state, action: PayloadAction<IErrorResponses>) => {
			state.error = action.payload.error
			state.isLoading = false
		},
		authLogout: state => {
			state.isAuth = false
			state.error = ''
			state.token = ''
			state.nickName = ''
			state.id = 0
			state.email = ''
			state.refreshToken = ''

			localStorage.setItem(TOKEN_KEY, '')
			localStorage.setItem(NICK_NAME, '')
			localStorage.setItem(REFRESH_KEY, '')
			localStorage.setItem(EMAIL, '')
			localStorage.setItem(USER_ID, '')

			setCookie(TOKEN_KEY, '')
			setCookie(REFRESH_KEY, '')
		},
		finishLoading: state => {
			state.isLoading = false
		},
		refreshToken: (state, action: PayloadAction<string>) => {
			state.token = action.payload

			localStorage.setItem(TOKEN_KEY, action.payload)

			setCookie(TOKEN_KEY, action.payload)
		},
		refreshUser: (state, action: PayloadAction<string>) => {
			state.nickName = action.payload

			localStorage.setItem(NICK_NAME, action.payload)
		},
		updateAllToken: (
			state,
			action: PayloadAction<{ accessToken: string; refreshToken: string }>
		) => {
			state.token = action.payload.accessToken
			state.refreshToken = action.payload.refreshToken

			localStorage.setItem(TOKEN_KEY, action.payload.accessToken)
			localStorage.setItem(REFRESH_KEY, action.payload.refreshToken)

			setCookie(TOKEN_KEY, action.payload.accessToken)
			setCookie(REFRESH_KEY, action.payload.refreshToken)
		},
		updateCurrentUser: (state, action: PayloadAction<IAuthUser>) => {
			state.isLoading = false
			state.isAuth = true
			state.error = ''
			state.nickName = action.payload.nickname
			state.email = action.payload.email
			state.id = action.payload.id

			localStorage.setItem(NICK_NAME, action.payload.nickname)
			localStorage.setItem(EMAIL, action.payload.email)
			localStorage.setItem(USER_ID, String(action.payload.id))
		},
	},
})

export default authSlice.reducer
