import React, {Component} from 'react';

import './ActiveUser.css';

class ActiveUser extends Component{

  render(){
    const user = this.props.states.data.filter(user=>user.id === this.props.states.active)[0];
    return(
      <div className="col-md-3">
        <div className="sidebar">
          <img src={`images/${user.image}.svg`} alt="foto-sidebar"/>
          <h3>{user.name}</h3>
          <table>
            <tbody>
            <tr>
              <td>Age:</td>
              <td>{user.age}</td>
            </tr>
            <tr>
              <td>Favorite animal:</td>
              <td>{user.image}</td>
            </tr>
            <tr>
              <td>Phone:</td>
              <td>{user.phone}</td>
            </tr>
          </tbody>
          </table>
          <p><b>Favorite phrase: </b>{user.phrase}</p>
        </div>
      </div>
    )
  }
}

export default ActiveUser;
