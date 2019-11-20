import * as ACTION_TYPES from './action_types'

export const success = () => {
  return {
    type: ACTION_TYPES.LOGIN_SUCCESS
  }
}

export const failure = () => {
  return {
    type: ACTION_TYPES.LOGIN_FAILURE
  }
}

export const login_submit = (login_data) => {
  return {
    type: ACTION_TYPES.LOGIN_SUBMIT,
    payload: login_data
  }
}

export const logout = () => {
  return {
    type: ACTION_TYPES.LOGOUT
  }
}