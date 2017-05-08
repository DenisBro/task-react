import React, {Component} from 'react';
import ActiveUser from './ActiveUser';
import UserList from './UserList';

import './Toolbar.css';

class Toolbar extends Component{

  render(){
    return (
      <div>
        <div className="row">
          <div className="sort-btns col-sm-12">
            <button>
              <i className="fa fa-sort-alpha-desc" aria-hidden="true"></i>
              Sort by name
            </button>
            <button>
              <i className="fa fa-sort-numeric-desc" aria-hidden="true"></i>
              Sort by age
            </button>
          </div>
        </div>
        <div className="row">
          <ActiveUser/>
          <UserList data={this.props.data}/>
        </div>
      </div>
    )
  }
}

export default Toolbar;
