import React, { useState, useEffect } from 'react';
import './components.css'; // Import shared component styles
import BookList from './components/BookList.js';
import Header from './components/Header.js';
import SearchBar from './components/SearchBar.js';
import AddBookForm from './components/AddBookForm.js';

function App() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3001/books')
      .then(response => response.json())
      .then(data => {
        setBooks(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const handleAddBook = (newBookData) => {
    fetch('http://localhost:3001/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBookData),
    })
      .then(response => response.json())
      .then(addedBook => {
        setBooks((prevBooks) => [...prevBooks, addedBook]);
      })
      .catch(error => {
        console.error("Error adding book:", error);
        alert("Failed to add the book. Please try again.");
      });
  };

  const handleStatusUpdate = (bookId, newStatus) => {
    fetch(`http://localhost:3001/books/${bookId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status: newStatus }),
    })
      .then(response => response.json())
      .then(updatedBook => {
        setBooks((prevBooks) =>
          prevBooks.map((book) =>
            book.id === bookId ? updatedBook : book
          )
        );
      })
      .catch(error => {
        console.error("Error updating book status:", error);
        alert("Failed to update the book status. Please try again.");
      });
  };

  const filteredBooks = books.filter(book => {
    if (!searchTerm.trim()) return true;
    const lowerCaseSearchTerm = searchTerm.toLowerCase().trim();
    return (
      book.title.toLowerCase().includes(lowerCaseSearchTerm) ||
      book.author.toLowerCase().includes(lowerCaseSearchTerm)
    );
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="app-container">
      <Header onAddNewBookClick={() => setIsFormVisible(true)} />
      <main>
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <BookList books={filteredBooks} />
        {isFormVisible && (
          <AddBookForm
            onAddBook={handleAddBook}
            onCloseForm={() => setIsFormVisible(false)}
          />
        )}
      </main>
    </div>
  );
}

export default App;