export enum userFetchTypeAction {
  FETCH_USER = 'FETCH_USER',
  FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS',
  FETCH_USER_ERROR = 'FETCH_USER_ERROR',
}

export interface userFetch {
  type: userFetchTypeAction.FETCH_USER;
}

export interface userFetchSuccess {
  type: userFetchTypeAction.FETCH_USER_SUCCESS;
  payload: any[];
}

export interface userFetchError {
  type: userFetchTypeAction.FETCH_USER_ERROR;
  payload: string;
}

export interface stateUserType {
  user: any;
  loading: boolean;
  error: null | string;
}

export type userTypeAction = userFetch | userFetchSuccess | userFetchError;
