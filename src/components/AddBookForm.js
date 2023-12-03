function AddBookForm() {
  return (
    <form className="add-book-form">
      <input className="user-input" placeholder="Book title"></input>
      <button className="add-book-button" type="submit">
        Add book
      </button>
    </form>
  );
}

export default AddBookForm;
