import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteBook, fetchBooks } from "../redux/bookSlice";

function BookList() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (!books.length) return <div>Loading...</div>;

  return (
    <div>
      <h2>Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author}
            <button onClick={() => dispatch(deleteBook({ id: book.id }))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
