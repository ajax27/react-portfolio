const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'dist')));

const PORT = process.env.PORT || 1234;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));