// backend/models/book.js
import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  user: { type: String, required: true },
});

export const book = mongoose.model('Book', bookSchema);
