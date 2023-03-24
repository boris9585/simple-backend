const express = require('express');
const app = express();
const port = process.env.PORT || 3002;

app.get('/', (req, res) => res.send('success'));

app.listen(port, () => console.log(`Server is running on port: ${port}`));