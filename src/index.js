const express = require('express');

const app = express();

// Setting up server vars
app.set('port', process.env.PORT || 5000);

// Routes
app.all('/', (req,res) => {
    console.log('API route hit', req.body);
    res.json({
        "status": "ok",
        "title": "",
        "message": ""
    });
});
app.all('/:xd', (req,res) => {
    console.log('API route hit', req.body);
    res.json({
        "status": "ok",
        "title": "",
        "message": ""
    });
});

// Server start
app.listen(app.get('port'), () => console.log(`Server online - port ${app.get('port')}`));