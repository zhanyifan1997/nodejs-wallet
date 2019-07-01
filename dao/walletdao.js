const mysqlutil = require('../util/mysqlutil');
const connection = mysqlutil.getConnection();
connection.connect(function (err) {
    if(err){
        throw err;
    }
});
function getAddress(userId){
    return new Promise((resolve,reject)=>{
        connection.query('select * from wallet where user_id= "'+ userId + '"', function(err,res){
            if(err){
                reject(err);
            }
            resolve(res);
        })
    });
}

function addAddress(userId,address,file_name){
    let params = [userId,address,file_name];
    return new Promise((resolve, reject)=>{
        connection.query('insert into wallet(user_id,address,file_name) values(?,?,?)',params,
            function (err,res) {
            if(err){
                reject(err)
            }
            resolve(res);
        })
    })
}



module.exports = {
    getAddress: (userId) => getAddress(userId),
    addAddress: (userId,address,file_name) => addAddress(userId,address,file_name)
}