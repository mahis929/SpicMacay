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

router.get("/events", function(req, res){
    res.render("home/events");
});
router.get("/acts", function(req, res){
    res.render("home/activities");
});
router.get("/wings", function(req, res){
    res.render("home/wings");
});
router.get("/gallery", function(req, res){
    res.render("home/gallery");
});
router.get("/team", function(req, res){
    res.render("home/team");
});
router.get("/contact", function(req, res){
    res.render("home/contact");
});
module.exports = router;