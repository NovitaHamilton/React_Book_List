import { useState } from 'react';
import '../styles/App.css';
import BookList from './BookList';
import AddBookForm from './AddBookForm';

function App() {
  // State to keep track of list of books
  const [books, setBooks] = useState([
    'Kite Runner',
    'The House in the Cerulean Sea',
    `The Handmaid's Tail`,
  ]);

  // State to capture user's input
  const [userInput, setUserInput] = useState([]);

  // Handle changes when user types on the form
  function handleFormChange(e) {
    e.preventDefault();
    const newUserInput = e.target.value;
    console.log('New User Input:', newUserInput);
    setUserInput(newUserInput);
  }

  // Handle user click
  function handleFormClick(e) {
    e.preventDefault();
    const updatedBooks = [...books, userInput];
    console.log('Updated Books:', updatedBooks);
    setBooks(updatedBooks);
    setUserInput('');
  }

  return (
    <div className="App">
      <h1>My Reads</h1>
      <p>
        Add book titles that you have read and would recommend others to read.
        😊
      </p>
      <AddBookForm
        userInput={userInput}
        onFormChange={handleFormChange}
        onFormClick={handleFormClick}
      />
      <div className="book-list">
        <BookList books={books} />
      </div>
    </div>
  );
}

export default App;
