const http = require('http');

http.createServer (function (req, res) {
    res.end();

}).listen(3000, function(){
    console.log('Connected to server at port 3000!');

})
