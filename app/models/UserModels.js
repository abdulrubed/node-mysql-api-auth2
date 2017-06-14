db = require('../../config/dbconfig.js');

var UserModels = {
	get_users : function get_users(req, callback) { 
		var sql = "SELECT * FROM users";
        db.query(sql, function (err, result) {
            if(err){
                callback(err);
            }else{ 
                callback(false, result);
            }
        });
	},
	create_users : function create_users(req, callback) {
		var data = req.body;
		console.log(data.user_name);
		var sql = "INSERT INTO users (user_name,age,email,status) values ('"+data.user_name+"','"+data.age+"','"+data.email+"','"+data.status+"')";
        db.query(sql, function (err, result) {
            if(err){
                callback(err);
            }else{ 
                callback(false, result);
            }
        });
	}
}

 module.exports = UserModels;