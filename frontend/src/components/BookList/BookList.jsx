import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./BookList.css";
import { deleteBook } from "../../redux/books/actionCreators";

const BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleDeleteBook = (id) => {
    dispatch(deleteBook(id));
  };

  return (
    <div className="app-block book-list">
      <h2>Book List</h2>
      {books.length === 0 ? (
        <p>No book available</p>
      ) : (
        <ul>
          {books.map((book, i) => (
            <li key={book.id}>
              <div className="book-info">
                {++i}. {book.title} by <strong>{book.author}</strong>
              </div>
              <button
                key={i}
                onClick={() => handleDeleteBook(book.id)}
                className="book-actions"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;
