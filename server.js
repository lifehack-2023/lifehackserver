const path = require('path');

const express = require('express');
const app = express();


app.get('/',function( req, res ){

    res.sendFile(`${path.join(__dirname, `frontend/home.html` )}`);
});

app.get('/about',function( req, res ){

    res.sendFile(`${path.join(__dirname, `frontend/about.html` )}`);
});


app.get('/schools',function( req, res ){

    res.sendFile(`${path.join(__dirname, `frontend/school.html` )}`);
});


app.listen(3000, function(){
    console.log(` The server is running on http://localhost:3000`);
})