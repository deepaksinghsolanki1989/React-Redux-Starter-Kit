import {all} from 'redux-saga/effects';
import authSagas from './auth/saga';
// import examSagas from './exams/saga';

export default function* rootSaga() {
	yield all([
		authSagas(),
		// examSagas(),
	]);
}