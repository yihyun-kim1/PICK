//서버 측 파일
var express = require('express');
var mysql = require('mysql');
var https = require('https');
var fs = require('fs');
var path = require('path');
var session = require('express-session');
var app = express();
var dbConfig = require(__dirname + '/config/db.js');
var conn = dbConfig.init();


dbConfig.connect(conn);

app.get('/', function (req, res) {
    res.send('mainTEST');
});


const filePath = path.join(__dirname, 'views', 'html', 'recommend');
const db = require('./db.js'); // db.js 파일 가져오기
const pool = db.getPool(); // db.js에서 생성한 연결 풀 가져오기

// 데이터베이스 쿼리 사용
pool.query('SELECT * FROM user_DB', function (error, results, fields) {
    if (error) {
        console.error('쿼리 실행 에러:', error);
    } else {
        console.log('쿼리 실행 결과:', results);
        // 결과 처리
    }
});


app.set('view engine', 'ejs');
app.set('views', filePath);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(filePath, { root: __dirname }));
app.use(express.static("views"));
app.use(express.static("views/html"));
app.use(express.static("views/javascript"));
app.use(express.static(__dirname + '/prismmm_0317'));


app.use(
    session({
        secret: 'your-secret-key',
        //임의로 설정 가능
        resave: false,
        saveUninitialized: true,
    })
);

app.post('/home', (req, res) => {
    const username = req.body.username;
    req.session.username = username;

    res.json({ result: 'success' });
});

app.post('/scan', (req, res) => {
    const top = req.body.top;
    const bottom = req.body.bottom;
    req.session.top = top;
    req.session.bottom = bottom;

    res.json({ result: 'success' });
});

app.post('/gender', (req, res) => {
    const gender = req.body.gender; //gender
    req.session.gender = gender;

    res.json({ result: 'success' });
});

app.post('/season', (req, res) => {
    const season = req.body.season; //season
    req.session.season = season;

    res.json({ result: 'success' });
});

app.post('/style', (req, res) => {
    const style = req.body.style;
    req.session.style = style;

    res.json({ result: 'success' });
});

app.post('/price', (req, res) => {
    const price = req.body.price; //price
    req.session.price = price;

    res.json({ result: 'success' });
});

app.post('/color', (req, res) => {
    const color_top = req.body.color_top;
    const color_bottom = req.body.color_bottom; //color_top
    req.session.color_top = color_top;
    req.session.color_bottom = color_bottom;

    res.json({ result: 'success' });
});

app.post('/fit', (req, res) => {
    const username = req.session.username;
    const top = req.session.top;
    const bottom = req.session.bottom;
    const gender = req.session.gender;
    const season = req.session.season;
    const style = req.session.style;
    const price = req.session.price;
    const color_top = req.session.color_top;
    const color_bottom = req.session.color_bottom;
    const fit_top = req.body.fit_top;
    const fit_bottom = req.body.fit_bottom;

    const sql = 'INSERT INTO user_DB (username, top, bottom, gender, season, style, price, color_top, color_bottom, fit_top, fit_bottom) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [username, top, bottom, gender, season, style, price, color_top, color_bottom, fit_top, fit_bottom];
    conn.query(sql, values, (error, results) => {
        if (error) {
            console.error('Database Error:', error);
            res.status(500).json({ result: 'error' });
        } else {
            console.log('Data inserted successfully');

            // Call matchImgData function to process the matching data and update images
            matchImgData(username, (matchError) => {
                if (matchError) {
                    console.error('Matching Error:', matchError);
                    res.status(500).json({ result: 'error' });
                } else {
                    console.log('Matching completed successfully');
                    res.json({ result: 'success' });
                }
            });
        }
    });
});


function matchTopData(username, callback) {
    const getUserSelectionsQuery = 'SELECT * FROM user_DB WHERE username = ?';
    conn.query(getUserSelectionsQuery, [username], (getUserSelectionsError, getUserSelectionsResults) => {
        if (getUserSelectionsError) {
            console.error('Error getting user selections:', getUserSelectionsError);
            callback(getUserSelectionsError);
            return;
        }

        const userSelections = getUserSelectionsResults[0];
        const { gender, season, style, price, color_top, fit_top } = userSelections;

        const getMatchingDataQuery = 'SELECT url, img FROM scrap_test WHERE top = "O" AND gender = ? AND season = ? AND style = ? AND price = ? AND color_top = ? AND fit_top = ? ORDER BY RAND() LIMIT 6';
        const getMatchingDataValues = [gender, season, style, price, color_top, fit_top];
        conn.query(getMatchingDataQuery, getMatchingDataValues, (getMatchingDataError, getMatchingDataResults) => {
            if (getMatchingDataError) {
                console.error('Error getting matching data:', getMatchingDataError);
                callback(getMatchingDataError);
                return;
            }

            // Get up to 6 URLs and corresponding img values from the results.
            const urls = getMatchingDataResults.map(row => row.url);
            const imgs = getMatchingDataResults.map(row => row.img);

            // Update the user's row in the user_DB table with the matched URLs and img values.
            const updateUserQuery = 'UPDATE user_DB SET result_top1 = ?, result_top2 = ?, result_top3 = ?, result_top4 = ?, result_top5 = ?, result_top6 = ?, ImgTop1 = ?, ImgTop2 = ?, ImgTop3 = ?, ImgTop4 = ?, ImgTop5 = ?, ImgTop6 = ? WHERE username = ?';
            const updateUserValues = [...urls, ...imgs, username];
            conn.query(updateUserQuery, updateUserValues, (updateUserError) => {
                if (updateUserError) {
                    console.error('Error updating user:', updateUserError);
                    callback(updateUserError);
                    return;
                }

                callback(null);  // No error
            });
        });
    });
}

function matchBottomData(username, callback) {
    const getUserSelectionsQuery = 'SELECT * FROM user_DB WHERE username = ?';
    conn.query(getUserSelectionsQuery, [username], (getUserSelectionsError, getUserSelectionsResults) => {
        if (getUserSelectionsError) {
            console.error('Error getting user selections:', getUserSelectionsError);
            callback(getUserSelectionsError);
            return;
        }

        const userSelections = getUserSelectionsResults[0];
        const { gender, season, style, price, color_bottom, fit_bottom } = userSelections;

        const getMatchingDataQuery = 'SELECT url, img FROM scrap_test WHERE bottom = "O" AND gender = ? AND season = ? AND style = ? AND price = ? AND color_bottom = ? AND fit_bottom = ? ORDER BY RAND() LIMIT 6';
        const getMatchingDataValues = [gender, season, style, price, color_bottom, fit_bottom];
        conn.query(getMatchingDataQuery, getMatchingDataValues, (getMatchingDataError, getMatchingDataResults) => {
            if (getMatchingDataError) {
                console.error('Error getting matching data:', getMatchingDataError);
                callback(getMatchingDataError);
                return;
            }

            // Get up to 6 URLs and corresponding img values from the results.
            const urls = getMatchingDataResults.map(row => row.url);
            const imgs = getMatchingDataResults.map(row => row.img);

            // Update the user's row in the user_DB table with the matched URLs and img values.
            const updateUserQuery = 'UPDATE user_DB SET result_bottom1 = ?, result_bottom2 = ?, result_bottom3 = ?, result_bottom4 = ?, result_bottom5 = ?, result_bottom6 = ?, ImgBottom1 = ?, ImgBottom2 = ?, ImgBottom3 = ?, ImgBottom4 = ?, ImgBottom5 = ?, ImgBottom6 = ? WHERE username = ?';
            const updateUserValues = [...urls, ...imgs, username];
            conn.query(updateUserQuery, updateUserValues, (updateUserError) => {
                if (updateUserError) {
                    console.error('Error updating user:', updateUserError);
                    callback(updateUserError);
                    return;
                }

                callback(null);  // No error
            });
        });
    });
}

// Call matchImgData in matchTopData and matchBottomData functions
function matchImgData(username, callback) {
    matchTopData(username, (matchTopError) => {
        if (matchTopError) {
            console.error('Top Matching Error:', matchTopError);
            callback(matchTopError);
            return;
        }

        matchBottomData(username, (matchBottomError) => {
            if (matchBottomError) {
                console.error('Bottom Matching Error:', matchBottomError);
                callback(matchBottomError);
                return;
            }

            callback(null);  // No error
        });
    });
}

function generateRandomIndexes(length, count) {
    const indexes = [];
    while (indexes.length < count) {
        const randomIndex = Math.floor(Math.random() * length);
        if (!indexes.includes(randomIndex)) {
            indexes.push(randomIndex);
        }
    }
    return indexes;
}


app.get('/list', function (req, res) {
    var sql = 'SELECT * FROM user_DB';
    conn.query(sql, function (err, rows, fields) {
        if (err) console.log('query is not excuted. select fail…\n' + err);
        else res.render('index.ejs', { list: rows });
    });
});

app.get('/test', function (req, res) {
    fs.readFile(path.join(__dirname, 'kiosk_test.ejs'), function (error, data) {
        res.render('kiosk_test.ejs');
    });
});

app.get('/intro', function (req, res) {
    fs.readFile(path.join(__dirname, 'kiosk_intro.ejs'), function (error, data) {
        res.render('kiosk_intro.ejs');
    });
});

app.get('/home', function (req, res) {
    fs.readFile(path.join(__dirname, 'kiosk_home.ejs'), function (error, data) {
        res.render('kiosk_home.ejs');
    });
});

app.get('/scan', function (req, res) {
    fs.readFile(path.join(__dirname, 'kiosk_scan.ejs'), function (error, data) {
        res.render('kiosk_scan.ejs');
    });
});

app.get('/gender', function (req, res) {
    fs.readFile(path.join(__dirname, 'kiosk_gender.ejs'), function (error, data) {
        res.render('kiosk_gender.ejs');
     });
});

app.get('/season', function (req, res) {
    fs.readFile(path.join(__dirname, 'kiosk_season.ejs'),function (error, data) {
        res.render('kiosk_season.ejs');
    });
});

app.get('/style', function (req, res) {
    fs.readFile(path.join(__dirname, 'kiosk_style.ejs'), function (error, data) {
        res.render('kiosk_style.ejs');
    });
});

app.get('/price', function (req, res) {
    fs.readFile(path.join(__dirname, 'kiosk_price.ejs'), function (error, data) {
        res.render('kiosk_price.ejs');
    });
});

app.get('/color', function (req, res) {
    fs.readFile(path.join(__dirname, 'kiosk_color.ejs'), function (error, data) {
        res.render('kiosk_color.ejs');
    });
});

app.get('/fit', function (req, res) {
    fs.readFile(path.join(__dirname, 'kiosk_fit.ejs'), function (error, data) {
        res.render('kiosk_fit.ejs');
    });
});

app.get('/loading', function (req, res) {
    fs.readFile(path.join(__dirname, 'kiosk_loading.ejs'), function (error, data) {
        res.render('kiosk_loading.ejs');
    });
});

app.get('/result', function (req, res) {
    const username = req.session.username;
    const sql = 'SELECT * FROM user_DB WHERE username = ?';
    conn.query(sql, [username], function (err, rows) {
        if (err) {
            console.error('Database Error:', err);
            res.status(500).send('Internal Server Error');
        } else {
            const userData = rows[0];
            res.render('kiosk_result.ejs', { userData: userData });
        }
    });
});


app.get('/result_:username', function (req, res) {
    const username = req.params.username; // 동적 URL에서 username 가져오기
    const sql = 'SELECT * FROM user_DB WHERE username = ?';
    conn.query(sql, [username], function (err, rows) {
        if (err) {
            console.error('Database Error:', err);
            res.status(500).send('Internal Server Error');
        } else {
            const userData = rows[0];
            // imgtop, urltop 등의 필요한 데이터에 대한 처리
            // ...
            res.render('kiosk_result.ejs', { userData: userData });
        }
    });
});

 
// SSL options
var options = {
    key: fs.readFileSync('./config/www_pick-pick.site.key'),
    cert: fs.readFileSync('./config/www_pick-pick.site_cert.crt')    
};

// https.createServer(options, app).listen(8080, '0.0.0.0', () => {
//     console.log('서버가 8080번 포트에서 실행 중입니다.');
// });

app.listen(8080, '0.0.0.0',() => {
    console.log('서버가 8080번 포트에서 실행 중입니다.')});


process.on('SIGINT', () => {
    conn.end();
    console.log('MySQL 연결이 종료되었습니다.');
    process.exit();
});