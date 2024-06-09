// BookList.jsx
import React from "react";


const BookList = ({ books }) => {
  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>
          <h3>{book.title}</h3>
          <p>{book.description}</p>
        </div>
      ))}
    </div>
  );
};

export default BookList;
