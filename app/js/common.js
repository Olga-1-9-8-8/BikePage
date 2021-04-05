

$(document).ready(function(){
    $('.section-reviews').slick(
        {
            dots: true
        }    
    );  
    $('.arrow').on('click', function(){
        if($("#icon").hasClass("fa-bars")){
            $('#icon').removeClass("fa-bars");
            $('#icon').addClass('fa-chevron-down');
        } else {
            $('#icon').removeClass("fa-chevron-down");
            $('#icon').addClass('fa-bars');
        }
        $('.list .list__item').slideToggle();
         $('.list .list__item').attr("style");
    });
    $(window).resize (function() {
        if (window.innerWidth >= 752) { 
            $('.list .list__item').attr('style', '');
        } 
    })
});





