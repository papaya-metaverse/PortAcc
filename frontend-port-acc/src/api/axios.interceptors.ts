import axios from 'axios'
import { AppDispatch, RootState, store } from '@/redux'
import { authSlice } from '@/redux/slices/auth'

import { REFRESH_KEY, TOKEN_KEY } from '@/constants/auth'

import localStorageAvailable from '@/utils/localStorageAvailable'
import { AuthEndpoints } from './endpoints'

const dispatch = store.dispatch

function getLocalAccessToken() {
	if (localStorageAvailable()) return localStorage.getItem(TOKEN_KEY)
}

function getLocalRefreshToken() {
	if (localStorageAvailable()) return localStorage.getItem(REFRESH_KEY)
}

const axiosPrivate = axios.create()
export const fetchRefresh =
	() => async (dispatch: AppDispatch, getState: () => RootState) => {
		try {
			const response = await axios.post(AuthEndpoints.refresh(), null, {
				headers: { Authorization: 'Bearer ' + getState().auth.refreshToken },
			})

			dispatch(authSlice.actions.refreshToken(response.data))
		} catch (e: any) {
			console.log('refresh error')
			dispatch(authSlice.actions.authLogout())
		}
	}

axiosPrivate.interceptors.request.use(
	config => {
		const token = getLocalAccessToken()
		if (token) {
			config.headers['Authorization'] = `Bearer ${token}`
		}
		return config
	},
	error => {
		return Promise.reject(error)
	}
)

axiosPrivate.interceptors.response.use(
	res => {
		return res
	},
	async err => {
		const originalConfig = err.config

		if (err.response) {
			// Access Token was expired
			if (err.response.status === 401 && !originalConfig._retry) {
				originalConfig._retry = true

				try {
					dispatch(fetchRefresh())

					return axiosPrivate(originalConfig)
				} catch {
					return Promise.reject()
				}
			}

			if (err.response.status === 403 && err.response.data) {
				return Promise.reject(err.response.data)
			}
		}

		return Promise.reject(err)
	}
)

export const axiosInstance = axiosPrivate
