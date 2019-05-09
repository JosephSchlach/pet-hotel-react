import React, { Component } from 'react';
import {connect} from 'react-redux';
// import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';


class AddOwner extends Component {

state = {
newOwner: {
  name: '',
},
}

// handleChangeFor = (event) => {
//   // event.target.name is coming from name attribute on input field
//   let propertyName = event.target.name;
//   console.log('Property:', propertyName);
//   this.setState({
//     newOwner: {
//       ...this.state.newOwner,
//       // event.target.value has the value (typed in) from the input field
//       [propertyName]: event.target.value,
//     }
//   })
// }

// handleSubmit = (event) => {
//   event.preventDefault();
//   console.log(this.state.newOwner)
//   this.props.dispatch({type: 'ADD_PET', payload: this.state.newOwner})
//   this.setState({
//     newOwner: {
//       name: '',
//     },
//   })
// }

render() {
  return (
      <div>

      <div className="OwnerPet">
        <div className="PetOwner">
          <h2>Pet</h2>
        </div>
        <div className="PetOwner">
          <h2>Owner</h2>
        </div>
      </div>

     <div className="forms">
     <h3>Owner</h3>
      <form onSubmit={this.handleSubmit}>
        <label>Name:</label>
            <br />
        <input type="text" name="name"
                onChange={this.handleChangeFor}
                value={this.state.newOwner.name}></input>
            <br />
        <button type="submit" className="mainButton">
          ADD
        </button>
      </form>
      </div>


      <h3>Owners</h3>
          <br />
          {/* {JSON.stringify(this.props.reduxState.vin)} */}
        <table>
          <thead>
            <tr>
              <th className='tHead'>Name</th>
              <th className='tHead'>Number of Pets</th>
              <th className='tHead'>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='tData'>{}</td>
              <td className='tData'>{}</td>
              <td className='tData'>{}</td>
            </tr>
          </tbody>
        </table>
    </div>
);
}
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
})

export default connect(mapReduxStateToProps)(withRouter(AddOwner));