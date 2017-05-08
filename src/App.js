import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Toolbar from './Toolbar';
 //import load from './Load';
import axios from 'axios';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      data: null
    }
    // this.loadData();
  }

  componentDidMount() {
    axios.get(this.props.data)
      .then(res => {
        const users = res;
        this.setState({ data: JSON.parse(users) });
      });
  }


  // loadData(){
  //   load(this.props.data).then(users=>{
  //     console.log(this.props.data);
  //     this.setState({
  //       data: users
  //     });
  //   });
  //
  // }

  render() {
      console.log(this.state);
    return (
      <div className="container-fluid">
        <SearchBar/>
        <Toolbar/>
      </div>
    );
  }
}

export default App;
