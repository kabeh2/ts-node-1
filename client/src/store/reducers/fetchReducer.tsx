import { User } from '../actions/types/User.interface';
import {
  UserActionTypes,
  FETCH_ERROR,
  FETCH_REQUEST,
  FETCH_SUCCESS,
} from '../actions/types/actions';

interface IinitialState {
  loading: boolean;
  user: User;
  errors: string;
}

const initialState: IinitialState = {
  loading: false,
  user: { user: { _id: '', username: '', email: '', __v: 0 }, token: '' },
  errors: '',
};

const fetchReducer = (
  state = initialState,
  action: UserActionTypes
): IinitialState => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        loading: true,
        errors: '',
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case FETCH_ERROR:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    default:
      return state;
  }
};

export default fetchReducer;
