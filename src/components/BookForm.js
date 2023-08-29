import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addBook } from '../redux/books/booksSlice';
import '../styles/BookForm.css';

const BookForm = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const handleAddBook = (title, author) => {
    const newBook = {
      itemId: `${books.length + 1}`,
      title,
      author,
      category: 'uncategorized',
    };
    dispatch(addBook(newBook));
  };
  function handleClick(e) {
    e.preventDefault();
    if (!title || !author) return;
    handleAddBook(title.trim(), author.trim());
    setTitle('');
    setAuthor('');
  }
  return (
    <div className="containerCreateBooks">
      <h3>ADD NEW BOOK</h3>
      <form>
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Book Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <select className="select" value="action">
          <option value="action">Action</option>
          <option value="scienceFiction">Science Fiction</option>
          <option value="economy">Economy</option>
        </select>
        <button
          className="btn"
          type="submit"
          onClick={handleClick}
        >
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default BookForm;
