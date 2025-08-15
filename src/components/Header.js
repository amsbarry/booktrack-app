import React from 'react';
import PropTypes from 'prop-types'; // Added
function Header({ onAddNewBookClick }) { // Added prop
  return (
    <header className="app-header">
      <h1>BookTrack</h1>
      <button className="add-book-btn" onClick={onAddNewBookClick}> {/* Added onClick */}
        Add New Book
      </button>
    </header>
  );
}
Header.propTypes = { // Added
  onAddNewBookClick: PropTypes.func.isRequired,
};
export default Header;
