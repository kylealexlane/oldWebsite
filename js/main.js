$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= $("#header").height()) {
        $(".clearHeader").addClass("darkNavCustom");
    } else {
        $(".clearHeader").removeClass("darkNavCustom");
    }
});