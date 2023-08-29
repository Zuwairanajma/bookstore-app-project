import { useEffect } from 'react';
import '../styles/BookState.css';
import { useSelector, useDispatch } from 'react-redux';
import { getBookItems, removeBook } from '../redux/books/booksSlice';

const BookItems = () => {
  const dispatch = useDispatch();
  const { books, isLoading, error } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(getBookItems());
  }, [dispatch]);

  const renderBook = (itemId, book) => {
    const { category, title, author } = book;

    return (
      <div key={itemId} className="containerRender" style={{ display: 'flex' }}>
        <div className="renderLeft">
          <p>{category}</p>
          <h3>{title}</h3>
          <p>{author}</p>
          <div className="leftButton">
            <button className="leftButton" type="button">Comment</button>
            <button
              className="leftButton"
              type="button"
              onClick={() => dispatch(removeBook(itemId))}
            >
              Remove
            </button>
            <button className="leftButton" type="button">Edit</button>
          </div>
        </div>
      </div>
    );
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Request failed</p>;
  }

  if (!books) {
    return null;
  }

  return (
    <div>
      {Object.entries(books).map(([itemId, book]) => renderBook(itemId, book[0]))}
    </div>
  );
};

export default BookItems;
