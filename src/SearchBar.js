import React, {Component} from 'react';
import './Searchbar.css';

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.addFilterText = this.addFilterText.bind(this);
  }

  addFilterText(e){
    this.props.update({filterText: e.target.value});
  }

  render(){
    return (
      <div className="row">
        <div className="col-sm-12">
          <input
            className="serch-people"
            type="text"
            placeholder="Search people by name..."
            value={this.props.inputText}
            onChange={this.addFilterText}
          />
        </div>
      </div>
    )
  }
}

export default SearchBar;
