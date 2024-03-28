const express = require('express');
const mysql = require('mysql');
const session = require('express-session');
const path = require('path');
const https = require('https');
const fs = require('fs');

var options = {
    key: fs.readFileSync(path.join(__dirname, '..', '..', 'config', 'key.pem')),
    cert: fs.readFileSync(path.join(__dirname, '..', '..', 'config', 'cert.pem'))
};

const connection = mysql.createConnection({
    host: 'pickpick.store',
    database: 'prismpick',
    user: 'prismpick',
    password: 'prismpick1!',
});

const app = express();
const filePath = path.join(__dirname, '..', 'html', 'recommend');

app.set('view engine', 'ejs');
app.set('views', filePath);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(filePath));
app.use(express.static("views"));
app.use(express.static("views/html"));
app.use(express.static("views/javascript"));

app.use(
    session({
        secret: 'your-secret-key',
        //임의로 설정 가능
        resave: false,
        saveUninitialized: true,
    })
);

app.post('/test', (req, res) => {
    const gender = req.body.give_test_input; //gender
    req.session.gender = gender;

    res.json({ result: 'success' });
});


app.post('/test2', (req, res) => {
    const gender = req.session.gender; // 세션에서 gender 가져오기
    const season = req.body.give_test_input_2; // season 저장

    const sql = 'INSERT INTO user_DB (gender, season) VALUES (?, ?)';
    const values = [gender, season]; // gender, season 값을 순서대로 제공

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



app.get('/test', (req, res) => {
    res.render('kiosk_test');
});

app.get('/test2', (req, res) => {
    res.render('kiosk_test2');
});

https.createServer(options, app).listen(8000, () => {
    console.log('서버가 8000 포트에서 실행 중입니다.');
});

process.on('SIGINT', () => {
    connection.end();
    console.log('MySQL 연결이 종료되었습니다.');
    process.exit();
});
