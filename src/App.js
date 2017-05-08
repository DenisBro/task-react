import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import Toolbar from './Toolbar';


import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      data: null
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

  render() {
  //      console.log(this.state.data);
    if(this.state.data !== null){
    return (
      <div className="container-fluid">
        <SearchBar/>
          <Toolbar data={this.state.data}/>
      </div>
    );
  }else{
    return <div></div>
  }
  }
}


export default App;
