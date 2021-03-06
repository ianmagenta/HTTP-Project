const http = require('http');

http.createServer (function (req, res) {
    if (req.url === "/OK") {
        console.log("Inbound 'OK' request being processed...");
        res.writeHead(200);
        res.end();
    } else if (req.url === "/Created") {
        console.log();
        res.writeHead(201);
        res.end();
    } else if (req.url === "/Moved-Permanently") {
        console.log();
        res.writeHead(301);
        res.end();
    } else if (req.url === "/Bad-Request") {
        console.log();
        res.writeHead(400);
        res.end();
    } else if (req.url === "/Unauthorized") {
        console.log();
        res.writeHead(401);
        res.end();
    } else if (req.url === "/Forbidden") {
        console.log();
        res.writeHead(403);
        res.end();
    } else if (req.url === "/Internal-Server-Error") {
        console.log();
        res.writeHead(500);
        res.end();
    } else if (req.url === "/Gateway-Timeout") {
        console.log();
        res.writeHead(504);
        res.end();
    } else if (req.url === "/Found") {
        console.log();
        res.writeHead(302);
        res.end();
    } else if (req.url === "/Bonus/Redirect") {
        console.log();
        res.writeHead(302, {'Location': 'http://localhost:3000/Forbidden'});
        res.end();
    }
    else if (req.url === "/Bonus/Webpage") {
        console.log();
        res.writeHead(200);
        res.write('<html>', {'Content-Type': 'text/html'});
        res.write('<body>');
        res.write('<h1>Hello, World!</h1>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    }else if (req.url === "/Bonus/Created") {
        if (req.method == "POST"){
            res.writeHead(201);
            res.end();

        }else {
            res.writeHead(404);
            res.end();

        }
    }

    else {
        console.log("404: Page Not Found");
        res.writeHead(404);
        res.end();
    }
    res.end();

}).listen(3000, function(){
    console.log('Connected to server at port 3000!');
})
