const express = require('express');
const path = require('path');
const app = express();

// Tentukan direktori untuk file statis
app.use('/assets', express.static(path.join(__dirname, 'src/assets')));

// Rute default untuk menguji server
app.get('/', (req, res) => {
  res.send('Server berjalan dengan baik!');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
