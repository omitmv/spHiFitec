import { ON_SIGN_IN, ON_SIGN_OUT } from './constants'

export const authInitialState = {
  user: null,
  token: null,
  isAuthenticated: false
}

export const authReducer = (state, action) => {
  switch (action.type) {
    case ON_SIGN_IN:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true
      }
    case ON_SIGN_OUT:
      return authInitialState
    default:
      return state
  }
}
