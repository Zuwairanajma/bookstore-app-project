import PropTypes from 'prop-types';
import BookState from './BookState';

function BookList({ books }) {
  return (
    <div>
      {books.map((book) => (
        <BookState key={book.id} book={book} />
      ))}
    </div>
  );
}

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      chapter: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default BookList;
