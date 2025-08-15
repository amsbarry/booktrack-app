import React from 'react';
import PropTypes from 'prop-types'; // Added
import BookCard from './BookCard';
function BookList({ books, onStatusUpdate }) { // Added prop
  return (
    <div className="book-list">
      {books.map(book => (
        <BookCard key={book.id} book={book} onStatusUpdate={onStatusUpdate} /> // Pass prop
      ))}
    </div>
  );
}
BookList.propTypes = { // Added
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  onStatusUpdate: PropTypes.func.isRequired,
};
export default BookList;
