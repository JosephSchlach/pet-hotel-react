import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class AddOwner extends Component {

  state = {
    newOwner: {
      name: '',
    },
  }

  componentDidMount = () => {
    this.props.dispatch({ type: 'GET_OWNERS' });
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
          <div className="PetOwner" onClick={this.toOwnerPage}>
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
              // value={this.state.newOwner.name}
              >
            </input>
            <br />
            <button type="submit" className="mainButton">
              ADD
        </button>
          </form>
        </div>


        <h3>All Owners</h3>
        <br />
        {this.props.reduxState.owners[0] !== 'default_owner' ?
          <table>
            <thead>
              <tr>
                <th className='tHead'>Name</th>
                <th className='tHead'>Number of Pets</th>
                <th className='tHead'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.reduxState.owners.map(owner =>
                  <tr key={owner.id}>
                    <td className='tData'>{owner.owner_name}</td>
                    <td className='tData'>{owner.count}</td>
                    <td className='tData'></td>
                  </tr>
                )
              }
            </tbody>
          </table> :
          <table>
            <thead>
              <tr>
                <th className='tHead'>Name</th>
                <th className='tHead'>Number of Pets</th>
                <th className='tHead'>Actions</th>
              </tr>
            </thead>
          </table>
        }
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
})

export default connect(mapReduxStateToProps)(withRouter(AddOwner));
