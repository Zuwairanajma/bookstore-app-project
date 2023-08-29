import { useSelector } from 'react-redux';
import BookItems from './BookItems';

function BookList() {
  const { books } = useSelector((state) => state.books);

  return (
    <div>
      {books.map((bookItem) => (
        <BookItems key={bookItem.itemId} bookItem={bookItem} />
      ))}
    </div>
  );
}

export default BookList;
