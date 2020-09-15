import { takeEvery, all, fork, put } from "redux-saga/effects";
import { delay, select } from "redux-saga/effects";
import { authActions } from "./reducer";

const watchAuth = () =>
	function* watch() {
		// yield takeEvery(authActions.Types.LOGIN, login);
	};

function* login(token: string) {
	// yield delay(1000);

	// let users = yield select(getUserAccounts);

	// const user = users.find((user) => data.username === user.username && data.password === user.password);

	// if (user) {
	// 	yield put(authActions.Creators.loginSuccess(user));
	// } else {
	// 	yield put(messageActions.Creators.setErrorMessage("Invalid username or password."));
	// }
}

export default function* authSagas() {
	yield all([fork(watchAuth())]);
}
