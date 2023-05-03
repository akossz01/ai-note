const mysql = require('mysql2');
const express = require('express');
const cors = require('cors');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: 'password',
  database: 'database_name'
});

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  connection.query('SELECT * FROM chats', (error, results, fields) => {
    if (error) {
      console.error('Error retrieving chats from database: ' + error.stack);
      return res.status(500).json({ error: 'An error occurred' });
    }

    res.json(results);
  });
});

const PORT = 4200;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
