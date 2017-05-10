import React, {Component} from 'react';

class UserData extends Component{

  render(){
    return(
      <tbody>
      {this.props.data.map((user,index)=>{
          return  <tr classID={user.id} key={user.id} onClick={()=>this.props.update({active:index})}>
                    <td><img src={`images/${user.image}.svg`} alt="person-foto"/></td>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>{user.phone}</td>
                  </tr>
      })
    }
      </tbody>

    )
  }
}

export default UserData;
