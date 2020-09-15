import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import rootSagas from "./saga";

export default () => {
	const sagaMiddleware = createSagaMiddleware();
	const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

	sagaMiddleware.run(rootSagas);

	return { store };
};
