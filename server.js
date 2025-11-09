const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

appapp.listen(PORT, () => {app.use(express.static('public'));
  console.log(`Server running on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

