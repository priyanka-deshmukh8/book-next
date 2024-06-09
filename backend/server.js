import express from 'express';
import http from 'http';
import { WebSocketServer } from 'ws';
import mongoose from 'mongoose';
import { book } from './models/book'; 

const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server });


mongoose.connect('mongodb://localhost:27017/yourdatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});


wss.on('connection', (ws) => {
  console.log('New WebSocket connection');

  ws.on('close', () => {
    console.log('WebSocket connection closed');
  });

  ws.on('error', (error) => {
    console.error('WebSocket error:', error);
  });
});


const notifyClients = (book) => {
  const message = JSON.stringify({ type: 'NEW_BOOK', book });
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(message);
    }
  });
};


app.post('/add-book', express.json(), async (req, res) => {
  const { title, description, user } = req.body;
  try {
    const newBook = new book({ title, description, user });
    await newBook.save();
    notifyClients(newBook);
    res.status(201).json(newBook);
  } catch (error) {
    res.status(400).json({ error: 'Error adding book' });
  }
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
