import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import Toolbar from './Toolbar';


import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      data: null,
      active: 0,
      filterText: ''
    }
  }

  componentDidMount() {
    axios.get(this.props.data)
      .then(users => {
        this.setState({
          data: users.data
        });
      });
  }

  changeState(config){
    this.setState(config);
  }

  render() {
 //console.log(this.state.filterText);
    if(this.state.data !== null){
    return (
      <div className="container-fluid">
          <SearchBar inputText={this.state.filterText}
                     update={this.changeState.bind(this)}/>
          <Toolbar data={this.state}
                   update={this.changeState.bind(this)}/>
      </div>
    );
  }else{
    return <div></div>
  }
  }
}


export default App;
