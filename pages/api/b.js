// pages/api/books.js
import { book } from '../../backend/models/book';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const books = await book.find();
      res.status(200).json(books);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch books' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
