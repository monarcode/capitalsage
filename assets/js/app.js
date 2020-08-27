$(document).ready(function(){
    $('.carousel').carousel();

    $(window).scroll(function(){
        let scr = $(window).scrollTop();

        // $("#nav").toggleClass("nav-scroll",src>20);
        if(scr>20){
            $('#nav').toggleClass('nav-scroll');
        }
    })
})