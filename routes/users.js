var express = require('express'),
	router = express.Router(),
	UserController = require('../app/controllers/UserController');
	TokenController = require('../app/controllers/TokenController');

	var route = function(app){
	 
	 router.post('/get_users',TokenController.authentication,UserController.get_users);
	 router.post('/create_users',TokenController.authentication,UserController.create_users);
	// router.get('/send_message',UserController.sendMessage);
	// router.put('/send_message',UserController.sendMessage);
	// router.delete('/send_message',UserController.sendMessage);

     app.use('/v1/users',router);
	}
	module.exports = route;