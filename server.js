const express = require('express');
const server = express();

server.use(express.static(__dirname + '/dist'));

server.get('/', (req, res) => {
    res.sendFile(__dirname + '/dist/index.html');
});

// If an incoming request uses a protocol other than HTTPS,
// redirect that request to the same url but with HTTPS
const forceSSL = function () {
    return function (req, res, next) {
        if (req.headers['x-forwarded-proto'] !== 'https') {
            return res.redirect(
                ['https://', req.get('Host'), req.url].join('')
            );
        }
        next();
    }
}

// Instruct the server to use the forceSSL middleware
server.use(forceSSL());

server.listen(process.env.PORT || 8080, () => {
    console.log('\x1b[36m%s\x1b[0m', 'Essence FE test server running on port', (process.env.PORT || 8080));
});
