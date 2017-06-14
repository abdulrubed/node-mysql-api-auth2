var express      = require('express'),
    app          = express(),
    fs           = require('fs'),
    path         = require('path'),
    bodyParser   = require('body-parser'),
    compression  = require('compression');

    app.use(compression({ filter: shouldCompress }));

	function shouldCompress(req, res) {
	    if (req.headers['x-no-compression']) {
	        // don't compress responses with this request header
	        return false;
	    }
	    // fallback to standard filter function
	    return compression.filter(req, res);
	}

	app.set('rootDirectory', __dirname); // Set root directory
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(express.static(path.join(__dirname, 'public')));

	app.listen(2149, function() {
    console.log('listening on 2149');
})

	// require routes files
var routPath = path.join(app.get('rootDirectory'), 'routes');
var files    = fs.readdirSync(routPath);
files.forEach(function(file, index) {
    require(path.join(routPath, file))(app);
})

	// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        success: false,
        message: err.message,
        error: err
    });
});

module.exports = app;