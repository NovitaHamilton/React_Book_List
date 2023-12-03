import { useState } from 'react';
import '../styles/App.css';
import BookList from './BookList';
import AddBookForm from './AddBookForm';

function App() {
  // State to keep track of list of books
  const [books, setBooks] = useState([
    'Kite Runner',
    'The House in the Cerulean Sea Book by TJ Klune',
    `The Handmaid's Tail`,
  ]);

  // State to capture user's input

  return (
    <div className="App">
      <h1>My Reads</h1>
      <p>
        Add book titles that you have read and would recommend others to read.
        😊
      </p>
      <AddBookForm />
      <div className="book-list">
        <BookList books={books} />
      </div>
    </div>
  );
}

export default App;
