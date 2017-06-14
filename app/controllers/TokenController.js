db = require('../../config/dbconfig');
var TokenModel = require('../models/TokenModels');
var TokenController = {
	authentication : function authentication(req, res, next) {		
		TokenModel.authentication(req,function(err, data){
           if(err){
             	var res = new Error('invalid');
             	res.status = 401;
             	return next(res);
           }else{
           		req.user = data;
              	return next(false,req);
           }
		})
		
	}
}

module.exports = TokenController;