const path = require('path');

module.exports = function(app) {
    
    app.get('/points', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/html/index.html'));
    });

    app.get('*', function(req, res){
        res.sendFile(path.join(__dirname, '../public/html/index.html'));
    });
};