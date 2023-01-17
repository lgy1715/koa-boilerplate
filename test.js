// 클라이언트 
const mysql = require('mysql2');

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