import Immutable from "seamless-immutable";
import { createActions, createReducer } from "reduxsauce";

type authType = {
    isLogin: boolean
    error: string
    user: object | null 
    isLoading: boolean
}

const INITIAL_STATE: authType = Immutable({ isLogin: false, error: '', user: null, isLoading: false });

const { Types, Creators } = createActions({
	login: ['token'],
	loginSuccess: ['user'],
	loginFailure: ['error'],

    logout: null,
});

export const authActions = {
	Types,
	Creators,
};

const loginSuccess = (state: authType, user: object) =>
	Immutable(state).merge({
		isLogin: true,
        error: '',
        user,
        isLoading: false
    });
    
const loginFailure = (state: authType, error: string) =>
	Immutable(state).merge({
        isLogin: true,
        error,
        user: null,
        isLoading: false
    });


const logout = (state: authType) =>
	Immutable(state).merge({
		isLogin: false,
		error: '',
        user: null,
        isLoading: false
	});

export const authReducer = createReducer(INITIAL_STATE, {
    [Types.LOGIN_SUCCESS]: loginSuccess,
	[Types.LOGIN_FAILURE]: loginFailure,
	[Types.LOGOUT]: logout,
});
