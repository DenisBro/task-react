import React, {Component} from 'react';
import ActiveUser from './ActiveUser';
import UserList from './UserList';

import './Toolbar.css';

class Toolbar extends Component{
  constructor(props){
    super(props);
    this.state={
      name: true,
      age: true
    }
  }

  sortBy(type){
    const sortState = this.state[type];
    let direction = sortState ? 1 : -1;

    const sortedUsers = this.props.data.data.sort((a, b) => {
     if (a[type] === b[type]) { return 0; }
     return a[type] > b[type] ? direction : direction * -1;
   });


   let forState={};
   for (var key in this.state) {
     if(key===type) forState[key] = !sortState;

   }
   this.setState(forState);

   this.props.update(sortedUsers);
  }


  render(){
    return (
      <div>
        <div className="row">
          <div className="sort-btns col-sm-12">
            <button onClick={() => this.sortBy('name')}>
              <i className="fa fa-sort-alpha-desc" aria-hidden="true"></i>
              Sort by name
            </button>
            <button onClick={() => this.sortBy('age')}>
              <i className="fa fa-sort-numeric-desc" aria-hidden="true"></i>
              Sort by age
            </button>
          </div>
        </div>
        <div className="row">
          <ActiveUser states={this.props.data} />
          <UserList data={this.props.data.data}
                    update={this.props.update}
                    states={this.props.data}/>
        </div>
      </div>
    )
  }
}

export default Toolbar;
