import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import Toolbar from './components/Toolbar';


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
       this.initialData = users.data;
        this.setState({
          data: users.data
        });
      });
  }

  changeState(config){
    this.setState(config);
  }

  render() {
    if(this.state.data !== null){
    return (
      <div className="container-fluid">
          <SearchBar inputText={this.state.filterText}
                     update={this.changeState.bind(this)}
                     stateData={this.state.data}
                     iniData={this.initialData}/>
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
