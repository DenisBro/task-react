import React, {Component} from 'react';

class UserData extends Component{
  changeActiveUser(e){
    const elemId = Number(e.currentTarget.getAttribute('classid'));
    const activeUser = this.props.data.filter(user=>user.id === elemId);
    this.props.update({active: activeUser[0].id});
  }

  render(){
    return(
      <tbody>
      {this.props.data.map((user)=>{
      return  <tr classID={user.id} key={user.id} onClick={this.changeActiveUser.bind(this)}>
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
