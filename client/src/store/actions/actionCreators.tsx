import {
  AppActions,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_ERROR,
  LOGIN,
  SIGN_UP,
} from './types/actions';
import { User } from './types/User.interface';
import { UserCredentials } from './types/UserCredentials.interface';
import { NewUser } from './types/NewUser.interface';

export const fetchRequest = (): AppActions => ({
  type: FETCH_REQUEST,
});

export const fetchSuccess = (data: User): AppActions => ({
  type: FETCH_SUCCESS,
  payload: data,
});

export const fetchError = (error: string): AppActions => ({
  type: FETCH_ERROR,
  payload: error,
});

export const login = (credentials: UserCredentials): AppActions => ({
  type: LOGIN,
  payload: credentials,
});

export const signup = (credentials: NewUser): AppActions => ({
  type: SIGN_UP,
  payload: credentials,
});
