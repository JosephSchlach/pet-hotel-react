
//  will hold owners from server
// action SET_OWNERS sent by saga with payload
// Used to store owners returned from the server
const owners = (state = [], action) => {
   switch (action.type) {
      case 'SET_OWNERS':
         return action.payload;
      default:
         return state;
   }
}

export default owners;
