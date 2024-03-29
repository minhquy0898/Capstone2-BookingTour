// import { createSlice } from '@reduxjs/toolkit'
// import * as actions from './asyncActions'

// export const userSlice = createSlice({
// 	name: 'user',
// 	initialState: {
// 		isLoggedIn: false,
// 		current: null,
// 		token: null,
// 		isLoading: false,
// 	},
// 	reducers: {
// 		login: (state, action) => {
// 			state.isLoggedIn = action.payload.isLoggedIn
// 			state.token = action.payload.token
// 			state.current = action.payload.current
// 		},
// 		logout: state => {
// 			state.isLoggedIn = false
// 			state.token = null
// 			state.current = null
// 		},
// 	},
// 	// Code logic xử lý async action
// 	extraReducers: builder => {
// 		// Bắt đầu thực hiện action login (Promise pending)
// 		builder.addCase(actions.getCurrent.pending, state => {
// 			// Bật trạng thái loading
// 			state.isLoading = true
// 		})

// 		// Khi thực hiện action login thành công (Promise fulfilled)
// 		builder.addCase(actions.getCurrent.fulfilled, (state, action) => {
// 			// Tắt trạng thái loading, lưu thông tin user vào store
// 			state.isLoading = false
// 			state.current = action.payload
// 			state.isLoggedIn = true
// 		})

// 		// Khi thực hiện action login thất bại (Promise rejected)
// 		builder.addCase(actions.getCurrent.rejected, (state, action) => {
// 			// Tắt trạng thái loading, lưu thông báo lỗi vào store
// 			state.isLoading = false
// 			state.current = null
// 			state.isLoggedIn = false
// 			state.token = null
// 		})
// 	},
// })

// export const { login, logout } = userSlice.actions

// export default userSlice.reducer // reducer là export cả reducers vs extraReducers
