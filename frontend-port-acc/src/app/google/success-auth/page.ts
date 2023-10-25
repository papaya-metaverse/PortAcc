'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAppDispatch } from '@/hooks/useRedux'
import { getCookie } from '@/utils/cookies'
import { TOKEN_KEY2, REFRESH_KEY2 } from '@/constants/auth'
import { authSlice } from '@/redux/slices/auth'
import { fetchGetUserCurrent } from '@/api/user.api'

const GoogleSuccessAuthPage = () => {
	const dispatch = useAppDispatch()
	const { push } = useRouter()
	console.log('sdfsafsdfsdsfds')
	useEffect(() => {
		const Auth = async () => {
			console.log('here1')

			if (getCookie(TOKEN_KEY2)) {
				console.log('here2')

				dispatch(
					authSlice.actions.updateAllToken({
						accessToken: getCookie(TOKEN_KEY2),
						refreshToken: getCookie(REFRESH_KEY2),
					})
				)
				await dispatch(fetchGetUserCurrent()).then(res => {
					console.log('res', res.data)

					dispatch(authSlice.actions.updateCurrentUser(res.data))
				})

				push('/profile')
			}
		}

		Auth()
	}, [])
}

export default GoogleSuccessAuthPage
