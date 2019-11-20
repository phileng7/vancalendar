import React, { useReducer } from "react";
import StoreContext from '../context';
import * as ACTION_TYPES from '../actions/action_types'

export const initialState = {
  email: '',
  password: '',
  name: '',
  access_type: 0,
  isAuthenticated: false
}

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true
      }
    case ACTION_TYPES.LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false
      }
    case ACTION_TYPES.LOGIN_SUBMIT:
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
        name: action.payload.name,
        access_type: action.payload.access_type,
        isAuthenticated: true
      }
    case ACTION_TYPES.LOGOUT:
      return state = initialState;
    default:
      return state;
  }
}
export function StoreProvider(props) {
  const [state, dispatch] = useReducer(LoginReducer, initialState);
  const value = { state, dispatch };
  return <StoreContext.Provider value={value}>{props.children}</StoreContext.Provider>;
}