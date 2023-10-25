import { combineReducers, configureStore } from '@reduxjs/toolkit'

import auth from './slices/auth'

const rootReducer = combineReducers({
	auth,
})

export const store = configureStore({
	reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
