import '../styles/App.css';
import BookList from './BookList';

function App() {
  return (
    <div className="App">
      <h1>My Reads</h1>
      <p>
        Add book titles that you have read and would recommend others to read.
        😊
      </p>
      <div className="book-list">
        <BookList
          books={
            <ul>
              <li>Kite Runner</li>
              <li>The House in the Cerulean Sea Book by TJ Klune</li>
              <li>The Handmaid's Tail</li>
            </ul>
          }
        />
      </div>
    </div>
  );
}

export default App;
