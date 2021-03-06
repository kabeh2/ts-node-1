import { User } from './User.interface';
import { UserCredentials } from './UserCredentials.interface';
import { NewUser } from './NewUser.interface';

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';
export const SIGN_UP = 'SIGN_UP';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const TOGGLE_AUTH = 'TOGGLE_AUTH';
export const GET_USER = 'GET_USER';

export interface FetchRequestAction {
  type: typeof FETCH_REQUEST;
}

export interface FetchSuccessAction {
  type: typeof FETCH_SUCCESS;
  payload: User;
}

export interface FetchErrorAction {
  type: typeof FETCH_ERROR;
  payload: string;
}

export interface SignUpAction {
  type: typeof SIGN_UP;
  payload: NewUser;
}

export interface LoginAction {
  type: typeof LOGIN;
  payload: UserCredentials;
}

export interface LogoutAction {
  type: typeof LOGOUT;
}

export interface ToggleAuthAction {
  type: typeof TOGGLE_AUTH;
}

export interface GetUserAction {
  type: typeof GET_USER;
}

export type UserActionTypes =
  | FetchRequestAction
  | FetchSuccessAction
  | FetchErrorAction
  | SignUpAction
  | LoginAction
  | LogoutAction
  | ToggleAuthAction
  | GetUserAction;

export type AppActions = UserActionTypes;
