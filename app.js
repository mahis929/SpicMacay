var express = require("express"),
    app     = express();

app.get("/", function(req, res){
    res.send("Hii");
});

app.listen(3000, function(){
    console.log("SpicMacay Server has started..!!!");
});