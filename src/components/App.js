import { useEffect, useState } from 'react';
import '../styles/App.css';
import BookList from './BookList';
import AddBookForm from './AddBookForm';
import booksService from '../services/booksService';

function App() {
  // State to keep track of list of books
  const [books, setBooks] = useState([]);

  useEffect(() => {
    booksService.getAllBooks().then((data) => setBooks(data || []));
  }, []);

  // State to capture user's input
  const [userInput, setUserInput] = useState('');

  // Handle changes when user types on the form
  function handleFormChange(e) {
    e.preventDefault();
    const newUserInput = e.target.value;
    console.log('New User Input:', newUserInput);
    setUserInput(newUserInput);
    console.log('we are here');
  }

  // Handle new book title submission
  async function handleFormClick(newBook) {
    console.log('New Book:', newBook);
    booksService.addBook(newBook).then(() => {
      setUserInput('');
      booksService.getAllBooks().then((data) => setBooks(data));
    });
  }

  // Handle delete button click
  async function handleDeleteClick(e, id) {
    console.log(id);
    e.preventDefault();
    booksService.deleteBook(id).then(() => {
      booksService.getAllBooks().then((data) => setBooks(data));
    });
  }

  return (
    <div className="App">
      <h1>Welcome to Chirpy Chapters! 🐦📚</h1>
      <p>
        Got a book you can't stop talking about? Share it here! <br></br>It's
        our little spot for swapping top picks – no judgments, just good books.{' '}
        <br></br>
        Join in and let's trade recommendations. Excited to see what's on your
        shelf! 🤓
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
