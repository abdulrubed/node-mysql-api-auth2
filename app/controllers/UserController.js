db = require('../../config/dbconfig');
var UserModel = require('../models/UserModels');
var UserController = {
	get_users : function get_users(req, res, next) {
		UserModel.get_users(req,function(err, data){
           if(err){
             	res.json({success:false, data:[],messge:err});
           }else{
              	res.json({success:true, data:data,messge:'Users List.'});
           }
		})
		
	},
	create_users : function create_users(req, res, next) {
		UserModel.create_users(req,function(err, data){
           if(err){
             	res.json({success:false, data:[],messge:err});
           }else{
              	res.json({success:true, data:data,messge:'Users List.'});
           }
		})
		
	}
}

 module.exports = UserController;