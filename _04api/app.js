const express = require('express');
const app = express();
const PORT = 3000;

// Sample gaming news data
const gamingNews = [
  { id: 1, title: 'New Game Announcement', content: 'Exciting news about a new game release!', author: 'John Doe', published: '2022-03-15' },
  { id: 2, title: 'Game Update Patch Notes', content: 'Details about the latest game update and patch notes.', author: 'Jane Smith', published: '2022-03-16' }
];

// Endpoint to get all gaming news articles
app.get('/api/gaming-news', (req, res) => {
  res.json(gamingNews);
});

// Endpoint to get a specific gaming news article by ID
app.get('/api/gaming-news/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const article = gamingNews.find(news => news.id === id);
  if (article) {
    res.json(article);
  } else {
    res.status(404).json({ message: 'Article not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
