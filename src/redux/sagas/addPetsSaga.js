import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* addPet(pets) {
    try {
        yield axios.post({
            method: 'POST',
            url: '/api/pets/create.php',
            data: pets,
        })
        yield put({
            type: 'GET_PETS'
        })
    } catch (error) {
        console.log(`Couldn't add pet`, pets, error);
        alert(`Sorry, couldn't add the pet. Try again later`);
    }
}


function* addPetsSaga() {
    yield takeEvery('ADD_PETS', addPet);
}

export default addPetsSaga;