import { all } from 'redux-saga/effects';
import unitsWatch from './watcher';

export default function* rootSaga() {
	yield all([unitsWatch()]);
}