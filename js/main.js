
$(function(){
    $(window).scroll(function() {
        var scroll = $(window).scrollTop(); // how many pixels you've scrolled
        var os = $('#about').offset().top; // pixels to the top of div1
        var navHeight = $('#mainNav').height();
        // change the color. either by adding a class or setting a css property
        if(scroll > os - navHeight){
            $('#mainNav').addClass('darkNavBackground');
        }
        if(scroll < os - navHeight ){
            $('#mainNav').removeClass('darkNavBackground');
        }
    });
}); 
  