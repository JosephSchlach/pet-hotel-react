
//  will hold pets from server
// action SET_PETS sent by saga with payload
// Used to store pets returned from the server
const petReducer = (state = [], action) => {
   switch (action.type) {
      case 'SET_PETS':
         return action.payload;
      default:
         return state;
   }
}

export default petReducer;
