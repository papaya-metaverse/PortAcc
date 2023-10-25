import Cookies from 'universal-cookie'

const cookies = new Cookies()

export function setCookie(name: string, accessToken: string, path = '/') {
	cookies.set(name, accessToken, { path })
}

export function getCookie(name: string) {
	return cookies.get(name)
}
