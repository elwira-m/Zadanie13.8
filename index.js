var http = require('http');
var fs = require('fs');
var server = http.createServer();

server.on('request', function (request, response) {
             //response.setHeader("Content-Type", "text/html; charset=utf-8");
      if (request.method === 'GET' && request.url === '/hello') {
			        response.setHeader("Content-Type", "text/html; charset=utf-8");
			        fs.readFile('./index.html', 'utf-8', function (err, data) {
			          	response.write(data);
			          	response.end();
	  	});
		
      } else {
            fs.readFile('./kotkidwa.jpg', function (err, data) {
				         	response.statusCode = 404;
           			
			      if (!err) response.write(data);
                  response.end();
			      });
      }
});

server.listen(8080);
