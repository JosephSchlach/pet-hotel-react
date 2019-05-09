import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* getPets(action) {
    console.log(`Hit the getPets saga`, action);
    try {
        const getResponse = yield axios({
            type: 'GET',
            url: 'http://localhost:8080/api/pet/read.php',
        });
        const action = {
            type: 'SET_PETS',
            payload: getResponse.data
        };
        yield put(action);
        console.log('sent off SET_PETS action');

    } catch (error) {
        console.log(`Couldn't get pets`, error);
        alert(`Sorry, couldn't get the pets. Try again later`);
    }
} //   end getPets


function* getPetsSaga() {
    yield takeEvery('GET_PETS', getPets);
}

export default getPetsSaga;
