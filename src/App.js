import React, { Component } from 'react';
import { API_KEY } from './config.js';
import Search from './components/Search';
import BookList from './components/BookList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      bookList: []
    }
  }

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
