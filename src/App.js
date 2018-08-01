import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>{this.props.post}</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    post: state.posts,
  }
}

export default connect(mapStateToProps)(App);
