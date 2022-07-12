var express = require('express');
var app = express();
var PORT = 8888;
 
// With middleware
app.use('/user', function(req, res, next){
     console.log("/user called")
     res.end();
})
 
app.get('/user', function(req, res){
    console.log("User Page")
    res.end();
});
 
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});