import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* getOwners(action) {
    console.log(`Hit the getOwners saga`, action);
    try {
        const getResponse = yield axios.get({
            type: 'GET',
            url: '/api/owners/read.php',
        });
        const action = {
            type: 'SET_OWNERS',
            payload: getResponse.data
        };
        yield put(action);
        console.log('sent off SET_OWNERS action');

    } catch (error) {
        console.log(`Couldn't get owners`, error);
        alert(`Sorry, couldn't get the owners. Try again later`);
    }
} //   end getOwners


function* getOwnersSaga() {
    yield takeEvery('GET_OWNERS', getOwners);
}

export default getOwnersSaga;