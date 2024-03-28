const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit : 1000, // 연결 풀에 유지할 연결 수
    host: 'db.prismmm.gabia.io',
    port: '3306',
    user: 'prismmm',
    password: 'prism1234!',
    database: 'dbprismmm'
});

module.exports = {
    getPool: function () {
        return pool;
    }
};