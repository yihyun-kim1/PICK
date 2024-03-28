const https = require('https');
const express = require('express');
const mysql = require('mysql');
const path = require('path');
const exp = require('constants');

const connection = mysql.createConnection({
    host: 'pickpick.store',
    database: 'prismpick',
    user: 'prismpick',
    password: 'prismpick1!',
});

const app = express();
const filePath = path.join(__dirname, '../javascript/recommend_css');

app.use(express.json());
app.use(express, static(filePath));


app.post('/gender', (req, res) => {
    //현재 핸들링할 페이지에 대한 코드이므로 /gender로 선택
    const test_input = req.body.give_test_input;

    const sql = 'INSERT INTO user_DB (input) VALUES (?)';
    const values = [test_input];

    connection.query(sql, values, (error, results) => {
        if (error) {
            console.error('Database Error:', error);
            res.status(500).json({ result: 'error' });
        } else {
            console.log('Data inserted successfully');
            res.json({ result: 'success' });
        }
    });
});

https.createServer(options, app).listen(8000, () => {
    console.log('Server listening on port 8000');
});

process.on('SIGINT', () => {
    connection.end();
    console.log('MySQL Connection Closed');
    process.exit();
});
