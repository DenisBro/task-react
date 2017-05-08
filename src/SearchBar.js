import React, {Component} from 'react';
import './Searchbar.css';

class SearchBar extends Component{
  render(){
    return (
      <div className="row">
        <div className="col-sm-12">
          <input
            className="serch-people"
            type="text"
            placeholder="Search people by name..."
          />
        </div>
      </div>
    )
  }
}

export default SearchBar;
