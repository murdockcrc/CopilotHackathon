// write a nodejs server that will expose a method call "get" that will return the value of the key passed in the query string
// example: http://localhost:3000/get?key=hello
// if the key is not passed, return "key not passed"
// if the key is passed, return "hello" + key
// if the url has other methods, return "method not supported"
// when server is listening, log "server is listening on port 3000"
// use express as the web framework

const app = require('express')();
const port = 3000;
app.listen(port, () => {
    console.log('server is listening on port ' + port);
});

app.get('/get', (req, res) => {
    if (req.query.key) {
        res.send('hello ' + req.query.key);
    } else {
        res.send('key not passed');
    }
});

// add a GET method that returns the string 'hello world' on the root path /
app.get('/', (req, res) => {
    res.send('hello world');
});

// add a GET method that takes two datetime values and calculates the number of days between them
app.get('/daysBetweenDates', (req, res) => {
    if (req.query.start && req.query.end) {
        const start = new Date(req.query.start);
        const end = new Date(req.query.end);
        const days = (end - start) / (1000 * 60 * 60 * 24);
        res.send('days between dates: ' + days);
    } else {
        res.send('start and end dates are required');
    }
});

// add a GET method that validates a phone number. The method path is /validatephonenumber.
// The phone numbers need to be Spanish phone numbers. The format is +34xxxxxxxxx
app.get('/validatephonenumber', (req, res) => {
    if (req.query.phoneNumber) {
        const phoneNumber = req.query.phoneNumber;
        console.log(phoneNumber);
        const regex = /^\+34\d{9}$/;
        if (regex.test(phoneNumber)) {
            res.send('valid');
        } else {
            res.send('invalid');
        }
    } else {
        res.send('phoneNumber is required');
    }
});

// add a GET method that returns the color code for a color name. The method path is /returnColorCode.
app.get('/returnColorCode/:colorName', (req, res) => {  
    const colorName = req.params.colorName.toLowerCase();  
    if (colors[colorName]) {  
      res.send(colors[colorName]);  
    } else {  
      res.status(404).send(`Color "${colorName}" not found`);
    }  
});

