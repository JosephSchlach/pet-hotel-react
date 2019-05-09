import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* deletePet(action) {
    console.log('Hit the deletePet', action);
    try {
        // Attempt deleting disc, then calling getDisc
        yield axios.delete(`/api/pets/read.php/${action.payload}`);
        yield put({
            type: 'GET_PETS'
        });
    } catch (error) {
        // Log and alert if an error occurs
        console.log(`Couldn't delete pet`, error);
        alert(`Sorry, couldn't delete your pet. Try again later`);
    }
}


function* deletePetsSaga() {
    yield takeEvery('DELETE_PETS', deletePet);
}

export default deletePetsSaga;