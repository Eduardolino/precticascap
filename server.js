var ngrok = require('ngrok');

ngrok.connect({
    proto: 'http', // http|tcp|tls
    addr: 8080, // port or network address

    region: 'us' // one of ngrok regions (us, eu, au, ap), defaults to us,
    configPath: '../pracser/public/index.html' // custom path for ngrok config file 
}, function (err, url) {});
