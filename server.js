const http = require('http');

http.createServer (function (req, res) {
    if (req.url === "/OK") {
        console.log("Inbound 'OK' request being processed...");
        res.writeHead(200);
        res.end();
    } else {
        console.log("404: Page Not Found");
        res.writeHead(404);
        res.end();
    }
    res.end();

}).listen(3000, function(){
    console.log('Connected to server at port 3000!');

})
