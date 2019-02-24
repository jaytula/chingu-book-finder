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

  async componentDidMount() {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=unbearable+lightness+of+being&key=${API_KEY}`);
    // console.log(response);
    if (response.ok) {
      const json = await response.json();
      console.log(json);
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
