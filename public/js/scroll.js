$(document).ready(function(){
    $(".scroll-me").click(function(){
        var x = $(window).scrollTop();
        $('html,body').animate({ scrollTop: x + 700})
    });
});