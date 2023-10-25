// Модель для Mui
export enum ResponseType {
	Success = 'success',
	Error = 'error',
}
export interface DispatchResponse {
	type: ResponseType
	message?: string
	data?: any
}

// other
export enum ResponseTypeForHook {
	Success = 'success',
	Error = 'error',
	Error401 = 'error41',
}

export interface DispatchResponseForHook {
	type: ResponseTypeForHook
	message?: string
	data?: any
}
