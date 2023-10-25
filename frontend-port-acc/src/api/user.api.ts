import { ResponseTypeForHook } from '@/models/others.model'
import { AppDispatch, RootState } from '@/redux'
import { axiosInstance } from './axios.interceptors'
import { UserEndpoints } from './endpoints'

export const fetchGetUserCurrent =
	() => async (dispatch: AppDispatch, getState: () => RootState) => {
		try {
			const response = await axiosInstance.get(UserEndpoints.currentUser())

			return { type: ResponseTypeForHook.Success, data: response.data }
		} catch (e: any) {
			return { type: ResponseTypeForHook.Error }
		}
	}
