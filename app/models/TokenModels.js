db = require('../../config/dbconfig.js');

var TokenModels = {
	authentication : function get_users(req, callback) { 
        var data_header = req.headers;
		var sql = "SELECT * FROM active_login where skey='"+data_header.session_key+"'";
        db.query(sql, function (err, result) {
            if(err){
                callback(err);
            }else{
                if(!result.length)
                {
                    callback(true);
                }
                else
                {
                    callback(false.result);
                }
            }
        });
	}
}

 module.exports = TokenModels;