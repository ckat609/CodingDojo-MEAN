const fs = require('fs');
const http = require('http');
const server = http.createServer(function (request, response) {
    if (request.url === '/') {
        fs.readFile("./views/index.html", "utf8", function (errors, contents) {
            response.writeHead(200, {
                "Content-Type": "text/html"
            });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/cars') {
        fs.readFile('./views/cars.html', 'utf8', function (errors, contents) {
            response.writeHead(200, {
                "Content-Type": "text/html"
            });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/cats') {
        fs.readFile('./views/cats.html', 'utf8', function (errors, contents) {
            response.writeHead(200, {
                "Content-Type": "text/html"
            });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/cars/new') {
        fs.readFile('./views/carsnew.html', 'utf8', function (errors, contents) {
            response.writeHead(200, {
                "Content-Type": "text/html"
            });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/stylesheets/style.css') {
        fs.readFile('./stylesheets/style.css', 'utf8', function (errors, contents) {
            response.writeHead(200, {
                "Content-Type": "text/css"
            });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/images/car01.jpg') {
        fs.readFile('./images/car01.jpg', function (errors, contents) {
            response.writeHead(200, {
                "Content-Type": "image/jpeg"
            });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/images/car02.jpg') {
        fs.readFile('./images/car02.jpg', function (errors, contents) {
            response.writeHead(200, {
                "Content-Type": "image/jpeg"
            });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/images/car03.jpg') {
        fs.readFile('./images/car03.jpg', function (errors, contents) {
            response.writeHead(200, {
                "Content-Type": "image/jpeg"
            });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/images/cat01.jpg') {
        fs.readFile('./images/cat01.jpg', function (errors, contents) {
            response.writeHead(200, {
                "Content-Type": "image/jpeg"
            });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/images/cat02.jpg') {
        fs.readFile('./images/cat02.jpg', function (errors, contents) {
            response.writeHead(200, {
                "Content-Type": "image/jpeg"
            });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/images/cat03.jpg') {
        fs.readFile('./images/cat03.jpg', function (errors, contents) {
            response.writeHead(200, {
                "Content-Type": "image/jpeg"
            });
            response.write(contents);
            response.end();
        });
    } else {
        response.writeHead(404);
        response.end("File not found!");
    }
});

server.listen(8000);