// 클라이언트 
const mysql = require('mysql2');
const crypto = require('crypto');

let original = "admin1234";
let salt = "mysalt01234";

let result = crypto.pbkdf2Sync(original, salt, 50, 255, 'sha512')

console.log(result, toString('base64'));

// 데이터베이스와 연결 
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    datebase:'test'
});

// simple query

connection.query(
    'SELECT*FROM table WHERE `name` = "Page" AND `age` > 45',
    function(err, results, fields){
        console.log(results);
        console.log(fields);
    }
);

connection.query(
    'SELECT*FROM `table` WHERE `name` = "Page" AND `age` > 45',
    //'SELECT*FROM `table` WHERE `name` = ? AND `age` >  ?',
    //['Page', 45],
    function(err, results, fields) {
        console.log(results);
        console.log(fields);
    }
    
);