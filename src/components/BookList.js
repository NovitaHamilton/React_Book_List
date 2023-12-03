function BookList({ books }) {
  return books.map((book) => <li>{book}</li>);
}

export default BookList;
