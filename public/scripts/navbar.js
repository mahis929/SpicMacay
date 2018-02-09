$(window).on('scroll', function(){
    if($(window).scrollTop()){
        $('nav').addClass('black');
        $('nav ul li').removeClass('blk');
    } else {
        $('nav').removeClass('black');
        $('nav ul li').addClass('blk');
    }
});

function myFunction(x) {
    x.classList.toggle("change");
}

$(document).ready(function(){
    $("h4").click(function(){
        $("nav ul").toggleClass("active");
        $("nav ul").toggleClass("fade");
    });
});

$('.carousel').carousel({
    interval: 3000
})