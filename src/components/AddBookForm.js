function AddBookForm({ userInput, onFormChange, onFormClick }) {
  return (
    <form className="add-book-form">
      <input
        value={userInput}
        onChange={onFormChange}
        className="user-input"
        placeholder="Book title"
      ></input>
      <button onClick={onFormClick} className="add-book-button">
        Add book
      </button>
    </form>
  );
}

export default AddBookForm;
