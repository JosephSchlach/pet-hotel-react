import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import './AddPet.css';


class AddPet extends Component {

  state = {
    newPet: {
      pet_name: '',
      pet_color: '',
      pet_breed: '',
      owner: '',
    },
  }

  componentDidMount = () => {
    this.props.dispatch({ type: 'GET_PETS' });
  }

  handleChangeFor = (event) => {
    // event.target.name is coming from name attribute on input field
    let propertyName = event.target.name;
    console.log('Property:', propertyName);
    this.setState({
      newPet: {
        ...this.state.newPet,
        // event.target.value has the value (typed in) from the input field
        [propertyName]: event.target.value,
      }
    })
  }

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(this.state.newPet)
  //   this.props.dispatch({type: 'ADD_PET', payload: this.state.newPet})
  //   this.setState({
  //     newPet: {
  //       pet_name: '',
  //       pet_color: '',
  //       pet_breed: '',
  //       owner: '',
  //     },
  //   })
  // }


toPetPage = () => {
  this.props.history.push(`/home`)
}

toOwnerPage = () => {
  this.props.history.push(`/owner`)
}


render() {
  return (
      <div>

      <div className="OwnerPet">
        <div className="PetOwner" onClick={this.toPetPage}>
          <h2>Pet</h2>
        </div>
        <div className="PetOwner"onClick={this.toOwnerPage}>
          <h2>Owner</h2>

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
          <h3>Add Pet</h3>
          <form onSubmit={this.handleSubmit}>
            <label>Pet Name:</label>
            <br />
            <input type="text" name="pet_name"
              onChange={this.handleChangeFor}
              value={this.state.newPet.pet_name}></input>
            <br />
            <label>Pet Color:</label>
            <br />
            <input type="text" name="pet_color"
              onChange={this.handleChangeFor}
              value={this.state.newPet.pet_color}></input>
            <br />
            <label>Pet Breed:</label>
            <br />
            <input type="text" name="pet_breed"
              onChange={this.handleChangeFor}
              value={this.state.newPet.pet_breed}></input>
            <br />
            <label>Owner:</label>
            <br />
            <select
              name="owner_id"
              value={this.state.newPet.owner}
              onChange={this.handleChangeFor}>
              ><option></option>
              <option value="1">dale</option>
              <option value="2">bob</option>
              <option value="3">jim</option>
            </select>
            <br />
            <button type="submit" className="mainButton">
              ADD
        </button>
          </form>
        </div>


        <h3>History</h3>
        <br />
        {/* {JSON.stringify(this.props.reduxState.vin)} */}
        <table>
          <thead>
            <tr>
              <th className='tHead'>Owner</th>
              <th className='tHead'>Pet</th>
              <th className='tHead'>Breed</th>
              <th className='tHead'>Color</th>
              <th className='tHead'>Checked In</th>
              <th className='tHead'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.reduxState.pets.map(pet =>
            <tr key={pet.id} pet={pet}>
              <td className='tData'>{pet.owner}</td>
              <td className='tData'>{pet.pet_name}</td>
              <td className='tData'>{pet.pet_breed}</td>
              <td className='tData'>{pet.pet_color}</td>
              <td className='tData'>{}</td>
              <td className='tData'>{}</td>
            </tr>
              )
            }
          </tbody>
        </table>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
})

export default connect(mapReduxStateToProps)(withRouter(AddPet));

