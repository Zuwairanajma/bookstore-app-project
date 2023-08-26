import React from 'react';
import PropTypes from 'prop-types';
import '../styles/BookState.css';

function BookState({ book }) {
  return (
    <>
      <div className="containerRender" style={{ display: 'flex' }}>
        <div className="renderLeft">
          <p>{book.type}</p>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <div className="leftButton">
            <button className="leftButton" type="button">Comment</button>
            <button className="leftButton" type="button">Remove</button>
            <button className="leftButton" type="button">Edit</button>
          </div>
        </div>
      </div>
      <div className="renderRight">
        <div className="middle">
          <p className="Amid">Progress</p>
          <div className="midRight">
            <h4>{book.percentage}</h4>
            <h4>Completed</h4>
          </div>
        </div>
        <div className="deepRight">
          <p>Current Chapter</p>
          <p>{book.chapter}</p>
          <button className="blue" type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </>
  );
}
BookState.propTypes = {
  book: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      chapter: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default BookState;
