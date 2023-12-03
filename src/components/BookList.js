import { TiDelete } from 'react-icons/ti';

function BookList({ books, onDeleteClick }) {
  return books.map((book) => (
    <div key={book.id} className="book-item">
      <p>{book.title}</p>
      <button
        onClick={(e) => onDeleteClick(e, book.id)}
        className="delete-button"
      >
        <TiDelete />
      </button>
    </div>
  ));
}

export default BookList;
