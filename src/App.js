import { React, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Books from './components/Books';
import MenuLink from './components/MenuLink';
import Categories from './pages/Categories';
import { getBookItems } from './redux/books/booksSlice';
import './styles/App.css';

function App() {
  const { isLoading } = useSelector((store) => store.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookItems());
  }, []);
  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading</h1>
      </div>
    );
  }
  return (
    <div className="wrapper">
      <Router>
        <MenuLink />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
