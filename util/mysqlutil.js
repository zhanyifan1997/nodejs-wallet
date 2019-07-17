const mysql=require('mysql');

//实现本地链接
// const connection = mysql.createConnection({
//     host: 'rm-bp1inmi8r2pq0dq3m7o.mysql.rds.aliyuncs.com',
//     user: 'root',
//     password: 'dBfba1GXVAE0ce45',
//     database: 'clc'
// })

function getConnection(){
    let connection = mysql.createConnection({
        host: 'rm-bp1inmi8r2pq0dq3m7o.mysql.rds.aliyuncs.com',
        user: 'root',
        password: 'sGB0kGog6sgXIx3vyLKn2nGf5SHYnedX',
        database: 'clc'
    })
    return connection;
}

// function select(table_name,start,limit) {
//     let connection = this.getConnection();
//     connection.connect(function (err) {
//         if (err) {
//             console.error('error connecting:' + err.stack)
//         }
//         console.log('connected as id ' + connection.threadId);
//     })
//
//     connection.query('SELECT * FROM '+ table_name + ' limit '+start + ','+ limit, function (error, results, fields) {
//         if (error) {
//             throw error;
//         }
//         console.log('The solution is:', results);
//         return results;
//     });
//     connection.end();
// }


module.exports = {
    getConnection : () => getConnection()
}