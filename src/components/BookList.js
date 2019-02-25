import React, { Component } from 'react';
import { Card, CardImg, CardTitle, CardSubtitle, CardBody, Button } from 'reactstrap';

class BookList extends Component {

  render() {
    const data = this.props.data;
    const bookData = data.map(book => {
      return({
        id: book.id,
        thumbnail: book.volumeInfo.imageLinks.thumbnail || null,
        title: book.volumeInfo.title,
        subtitle: book.volumeInfo.subtitle || null,
        authors: book.volumeInfo.authors,
        publisher: book.volumeInfo.publisher,
        pageCount: book.volumeInfo.pageCount,
        averageRating: book.volumeInfo.averageRating || 'No ratings yet'
      });
    });

    return (
      <div>
      </div>
    );
  }
}

export default BookList;
