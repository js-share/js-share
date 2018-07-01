const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
  res.send({message: 'hi!'});
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
