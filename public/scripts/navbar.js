/*$('html').click(function(){
    alert($(window).width())
})*/

if (window.matchMedia('(max-width: 1225px)').matches)
{
    $('nav ul li').removeClass('blk');
} else {
    $('nav ul li').addClass('blk');
}

$(window).on('scroll', function(){
    if($(window).scrollTop()){
        $('nav').addClass('black');
        /*if (window.matchMedia('(max-width: 1220px)').matches)
        {
            $('nav ul li').removeClass('blk');
        }*/
        $('nav ul li').removeClass('blk');
    } else {
        $('nav').removeClass('black');
        /*if (window.matchMedia('(max-width: 1220px)').matches)
        {
            $('nav ul li').addClass('blk');
        }*/
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