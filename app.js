var express = require("express"),
    app     = express(),
    bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res){
    res.render("landing");
});

app.listen(3000, function(){
    console.log("SpicMacay Server has started..!!!");
});