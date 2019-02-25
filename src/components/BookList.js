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

    const bookList = bookData.map(bookItem => {
      return(
          <Card key={bookItem.id} width="100%">
            <CardImg src={bookItem.thumbnail} alt={bookItem.title} className="card-img"/>
            <CardBody>
              <CardTitle><h4>{bookItem.title}: {bookItem.subtitle}</h4></CardTitle>
              <CardSubtitle><h5>{bookItem.authors}</h5></CardSubtitle>
              <p><small>{bookItem.publisher}</small></p>
              <p>{bookItem.pageCount} pages</p>
              <p>Average Rating: {bookItem.averageRating}</p>
              <Button className="btn-success">See More</Button>
            </CardBody>
          </Card>
      );
    });

    return (
      <div className="container">
        <div className="col-12 col-xl-3 col-md-5 m1">
          {bookList}
        </div>
      </div>
    );
  }
}

export default BookList;
