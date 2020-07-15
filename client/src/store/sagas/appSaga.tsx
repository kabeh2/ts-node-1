import axios from 'axios';
import { all, takeLatest, put, call } from 'redux-saga/effects';
import {
  LOGIN,
  LoginAction,
  SIGN_UP,
  SignUpAction,
} from '../actions/types/actions';
import {
  fetchRequest,
  fetchSuccess,
  fetchError,
} from '../actions/actionCreators';
import { User } from '../actions/types/User.interface';
import { UserCredentials } from '../actions/types/UserCredentials.interface';
import authService, { apiUrl } from '../../services/auth.service';
import { NewUser } from '../actions/types/NewUser.interface';

// fetch call
const fetchLogin = async (payload: UserCredentials) => {
  const { data } = await axios.post(
    `${authService.apiUrl}/users/login`,
    payload
  );
  return data;
};

// worker
function* tryLogin(action: LoginAction) {
  try {
    yield put(fetchRequest());
    const data: User = yield call(fetchLogin, action.payload);
    console.log(data);
    yield put(fetchSuccess(data));
    yield call(authService.setToken(data.token));
  } catch (error) {
    yield put(fetchError(error.message));
  }
}

// watcher

function* onLogin() {
  yield takeLatest(LOGIN, tryLogin);
}

//fetch
const fetchSignUp = async (payload: NewUser) => {
  const { data } = await axios.post(`${apiUrl}/users/signup`, payload);
  return data;
};

// worker
function* trySignUp(action: SignUpAction) {
  try {
    yield put(fetchRequest());
    const data: User = yield call(fetchSignUp, action.payload);
    console.log('SIGNUP', data);
    yield put(fetchSuccess(data));
    yield call(authService.setToken(data.token));
  } catch (error) {
    yield put(fetchError(error.message));
  }
}

// watcher

function* onSignUp() {
  yield takeLatest(SIGN_UP, trySignUp);
}

export default function* appSaga() {
  yield all([call(onLogin), call(onSignUp)]);
}
