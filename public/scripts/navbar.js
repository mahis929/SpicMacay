$(window).on('scroll', function(){
    if($(window).scrollTop()){
        $('nav').addClass('black');
    } else {
        $('nav').removeClass('black');
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