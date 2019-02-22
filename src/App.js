import React, { Component } from 'react';
import Search from './components/Search';
import BookList from './components/BookList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Search></Search>
        <BookList></BookList>
      </div>
    );
  }
}

export default App;
