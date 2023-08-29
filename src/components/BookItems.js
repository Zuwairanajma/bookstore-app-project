import React from 'react';
import PropTypes from 'prop-types';
import '../styles/BookState.css';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const BookItems = ({ bookItem }) => {
  const {
    category, title, author, percentage, chapter, itemId,
  } = bookItem;

  const dispatch = useDispatch();

  return (
    <>
      <div className="containerRender" style={{ display: 'flex' }}>
        <div className="renderLeft">
          <p>{category}</p>
          <h3>{title}</h3>
          <p>{author}</p>
          <div className="leftButton">
            <button className="leftButton" type="button">Comment</button>
            <button
              className="leftButton"
              type="button"
              onClick={() => {
                dispatch(removeBook(itemId));
              }}
            >
              Remove
            </button>
            <button className="leftButton" type="button">Edit</button>
          </div>
        </div>
      </div>
      <div className="renderRight">
        <div className="middle">
          <p className="Amid">Progress</p>
          <div className="midRight">
            <h4>{percentage}</h4>
            <h4>Completed</h4>
          </div>
        </div>
        <div className="deepRight">
          <p>Current Chapter</p>
          <p>{chapter}</p>
          <button className="blue" type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </>
  );
};

BookItems.propTypes = {
  bookItem: PropTypes.shape({
    itemId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    chapter: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookItems;
