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
        <BookList />
      </div>
    </div>
  );
}

export default App;
