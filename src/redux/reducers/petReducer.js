
//  will hold pets from server
// action SET_PETS sent by saga with payload
// Used to store pets returned from the server
const pets = (state = ['default_pet'], action) => {
   switch (action.type) {
      case 'SET_PETS':
         return action.payload.pets;
      default:
         return state;
   }
}

export default pets;
