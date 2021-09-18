const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
const port = 3000;

// Serve static assets
app.use(express.static(path.join(__dirname)));

// Handles all routes and responds with an html file
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port, () => {
});
