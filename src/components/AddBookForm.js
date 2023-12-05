import { v4 as uuidv4 } from 'uuid';

function AddBookForm({ userInput, onFormChange, onFormClick }) {
  const handleAddBook = (e) => {
    if (userInput.trim() !== '') {
      e.preventDefault();
      const newBook = {
        id: uuidv4(),
        title: userInput,
      };
      console.log('New Book in addbook Form: ', newBook);

      onFormClick(newBook);
    }
  };

  return (
    <form className="add-book-form">
      <input
        value={userInput}
        onChange={onFormChange}
        className="user-input"
        placeholder="Enter book title"
      ></input>
      <button onClick={handleAddBook} className="add-book-button">
        Add book
      </button>
    </form>
  );
}

export default AddBookForm;
