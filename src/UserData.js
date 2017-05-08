import React, {Component} from 'react';

class UserData extends Component{


  render(){
    return(
      <tbody>
      {this.props.data.map((user)=>{
      return  <tr key={user.id}>
                <td><img src={`images/${user.image}.svg`} alt="person-foto"/></td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.phone}</td>
              </tr>
      }
    )}
      </tbody>

    )
  }
}

export default UserData;
