import React from 'react';
import PropTypes from 'prop-types';
import ProgressBar from './ProgressBar';
import { STATUSES } from '../data/constants'; // Added
function BookCard({ book, onStatusUpdate }) { // Added prop
  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p>Author: {book.author}</p>
      <p>Year: {book.year}</p>
      <p>Genre: {book.genre}</p>
      <div className="book-card-status">
        {/* Status: <span>{book.status}</span> Replaced with select */}
        <select
          value={book.status}
          onChange={(e) => onStatusUpdate(book.id, e.target.value)}
          className="status-select"
        >
          {Object.values(STATUSES).map(statusInfo => (
            <option key={statusInfo.id} value={statusInfo.id}>
              {statusInfo.label}
            </option>
          ))}
        </select>
      </div>
      <ProgressBar progress={book.progress} totalPages={book.totalPages} />
    </div>
  );
}
BookCard.propTypes = {
  book: PropTypes.shape({
    // ... as before
  }).isRequired,
  onStatusUpdate: PropTypes.func.isRequired, // Added
};
export default BookCard;
