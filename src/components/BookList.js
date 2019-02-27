import React, {Component} from 'react';
import {Grid, Card, Image, Button, Modal} from 'semantic-ui-react';

class BookList extends Component {
  render() {
    const data = this.props.data;
    const bookData = data.map(book => {
      return {
        id: book.id,
        thumbnail: book.volumeInfo.imageLinks.thumbnail || null,
        title: book.volumeInfo.title,
        subtitle: book.volumeInfo.subtitle
          ? ': ' + book.volumeInfo.subtitle
          : '',
        authors: book.volumeInfo.authors,
        publisher: book.volumeInfo.publisher,
        pageCount: book.volumeInfo.pageCount || '?',
        averageRating: book.volumeInfo.averageRating || 'No ratings yet',
      };
    });

    const bookList = bookData.map(bookItem => {
      return (
        <Grid.Column key={bookItem.id}>
          <Card>
            <Image
              fluid
              src={bookItem.thumbnail}
              alt={bookItem.title}
              className="thumbnail"
            />
            <Card.Content>
              <Card.Header>
                {bookItem.title}
                {bookItem.subtitle}
              </Card.Header>
              <Card.Meta className="authors">{bookItem.authors}</Card.Meta>
              <Card.Meta className="publisher">{bookItem.publisher}</Card.Meta>
              <p>{bookItem.pageCount} pages</p>
              <p>Average Rating: {bookItem.averageRating}</p>
              <Card.Description />
              <Modal trigger={<Button>See More...</Button>}>
                <Modal.Header>Example Component</Modal.Header>
                <Modal.Content>
                  <Modal.Description>
                    <p>{bookItem.title}</p>
                  </Modal.Description>
                </Modal.Content>
              </Modal>
            </Card.Content>
          </Card>
        </Grid.Column>
      );
    });

    return (
      <Grid stackable columns={4}>
        {bookList}
      </Grid>
    );
  }
}

export default BookList;
