import '../styles/BookForm.css';

function BookForm() {
  return (
    <div className="containerCreateBooks">
      <h3>ADD NEW BOOK</h3>
      <form>
        <input type="text" placeholder="Book Title" />
        <input type="text" placeholder="Book Author" />
        <select className="select" value="action">
          <option value="action">Action</option>
          <option value="scienceFiction">Science Fiction</option>
          <option value="economy">Economy</option>
        </select>
        <button className="btn" type="submit">
          ADD BOOK
        </button>
      </form>
    </div>
  );
}

export default BookForm;
