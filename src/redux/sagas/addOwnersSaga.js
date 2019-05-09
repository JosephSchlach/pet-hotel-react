import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* addOwner(owners) {
    try {
        yield axios({
            method: 'POST',
            url: '/api/owners/create.php',
            data: owners,
        })
        yield put({
            type: 'GET_OWNERS'
        })
    } catch (error) {
        console.log(`Couldn't add owner`, owners, error);
        alert(`Sorry, couldn't add the owner. Try again later`);
    }
}


function* addOwnersSaga() {
    yield takeEvery('ADD_OWNERS', addOwner);
}

export default addOwnersSaga;