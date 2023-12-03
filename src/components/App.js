import { useState } from 'react';
import '../styles/App.css';
import BookList from './BookList';
import AddBookForm from './AddBookForm';
import { v4 as uuidv4 } from 'uuid';

function App() {
  // State to keep track of list of books
  const [books, setBooks] = useState([
    {
      id: 1,
      title: 'Kite Runner',
    },
    {
      id: 2,
      title: 'The House in the Cerulean Sea',
    },
    {
      id: 3,
      title: `Handmaid's Tail`,
    },
  ]);

  // State to capture user's input
  const [userInput, setUserInput] = useState('');

  // Handle changes when user types on the form
  function handleFormChange(e) {
    e.preventDefault();
    const newUserInput = e.target.value;
    console.log('New User Input:', newUserInput);
    setUserInput(newUserInput);
  }

  // Handle new book title submission
  function handleFormClick(e) {
    e.preventDefault();
    const newBook = {
      id: uuidv4(),
      title: userInput,
    };
    console.log(newBook);
    const updatedBooks = [...books, newBook];
    console.log('Updated Books:', updatedBooks);
    setBooks(updatedBooks);
    setUserInput('');
  }

  // Handle delete button click
  function handleDeleteClick(e, id) {
    console.log(e); // Log the type of e
    console.log(id);
    e.preventDefault();
    const updatedBooks = books.filter((book) => book.id !== id); // Filter out the book with the given id
    setBooks(updatedBooks);
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
        <BookList books={books} onDeleteClick={handleDeleteClick} />
      </div>
    </div>
  );
}

export default App;
