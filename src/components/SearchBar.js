import React, {Component} from 'react';


class SearchBar extends Component{
  constructor(props){
    super(props);
    this.addFilterText = this.addFilterText.bind(this);
  }

  addFilterText(e){
    let value = e.target.value.toLowerCase();
    let alluser = this.props.iniData.filter(elem=>elem.name.toLowerCase().includes(value));

    this.props.update({filterText: value,
                         data: alluser,
                         active: 0
                      });
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
