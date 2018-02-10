var express = require("express"),
    router = express.Router();

router.get("/", function(req, res){
    res.render("landing");
});

router.get("/home", function(req, res){
    res.render("home/index");
});

router.get("/about", function(req, res){
    res.render("home/about");
});

module.exports = router;