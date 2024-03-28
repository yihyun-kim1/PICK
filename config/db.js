const mysql = require('mysql');
const dbInfo = {
    host: 'db.prismmm.gabia.io',
    port: '3306',
    user: 'prismmm',
    password: 'prism1234!',
    database: 'dbprismmm'
};

module.exports = {
    init: function () {
        return mysql.createConnection(dbInfo);
    },
    connect: function(conn) {
        conn.connect(function(err) {
            if(err) console.error('mysql 연결 에러 : ' + err, dbInfo);
            else console.log('mysql 연결 성공');
        });
    }
};