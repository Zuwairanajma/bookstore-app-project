import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { addBook } from '../redux/books/booksSlice';
import '../styles/BookForm.css';

const BookForm = () => {
  const dispatch = useDispatch();
  const initialState = {
    title: '',
    author: '',
    category: '',
  };
  const [bookData, setBookData] = useState(initialState);

  const inputChangehandler = (e) => {
    const { name, value } = e.target;
    setBookData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleAddBook = (e) => {
    e.preventDefault();

    const { title, author, category } = bookData;

    if (title && author && category) {
      const newBook = {
        item_id: nanoid(),
        ...bookData,
      };
      dispatch(addBook(newBook));
      setBookData(initialState);
    }
  };
  // const books = useSelector((state) => state.books);
  // const [title, setTitle] = useState('');
  // const [author, setAuthor] = useState('');
  // const handleAddBook = (title, author) => {
  //   const newBook = {
  //     itemId: `${books.length + 1}`,
  //     title,
  //     author,
  //     category: 'uncategorized',
  //   };
  //   dispatch(addBook(newBook));
  // };
  // function handleClick(e) {
  //   e.preventDefault();
  //   if (!title || !author) return;
  //   handleAddBook(title.trim(), author.trim());
  //   setTitle('');
  //   setAuthor('');
  // }
  return (
    <div className="containerCreateBooks">
      <h3>ADD NEW BOOK</h3>
      <form>
        <input
          type="text"
          placeholder="Book Title"
          value={bookData.title}
          onChange={inputChangehandler}
        />
        <input
          type="text"
          placeholder="Book Author"
          value={bookData.author}
          onChange={inputChangehandler}
        />
        <select
          className="select"
          value={bookData.category}
          onChange={inputChangehandler}
        >
          <option value="">Select Category</option>
          <option value="action">Action</option>
          <option value="scienceFiction">Science Fiction</option>
          <option value="economy">Economy</option>
        </select>
        <button
          className="btn"
          type="submit"
          onClick={handleAddBook}
        >
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default BookForm;
