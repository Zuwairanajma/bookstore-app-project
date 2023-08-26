import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Books from './components/Books';
import MenuLink from './components/MenuLink';
import Categories from './routes/Categories';
import Book from './routes/BookPage';
import './styles/App.css';

function App() {
  return (
    <div className="wrapper">
      <Router>
        <MenuLink />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/BookPage" element={<Book />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
