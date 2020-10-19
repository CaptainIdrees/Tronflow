// onScroll
$(window).on("scroll", function(){
    var scrollTop = $(window).scrollTop();
    if(scrollTop > 50){
    $('#main-nav').addClass('fixed-top');
    }
    else{
        $('#main-nav').removeClass('fixed-top');

    }
})