import React, {Component} from 'react';

class ActiveUser extends Component{

  render(){

    if(this.props.states.data.length === 0){
      return (
        <h3 className="col-md-3">
          Nothing found..
        </h3>
      );
    }

    let  user = this.props.states.data[this.props.states.active];

    return(
      <div className="col-md-3">
        <div className="activeuser-sidebar">
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
