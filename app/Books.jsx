'use client';

import React, { useEffect, useState } from 'react';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:3000');

    ws.onopen = () => {
      console.log('WebSocket connection opened');
    };

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if (message.type === 'NEW_BOOK') {
        setBooks((prevBooks) => [...prevBooks, message.book]);
      }
    };

    ws.onclose = () => {
      console.log('WebSocket connection closed');
    };

    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {books.map((book) => (
          <li key={book._id}>{book.title}</li> // Adjust accordingly if your user field contains different data
        ))}
      </ul>
    </div>
  );
};

export default Books