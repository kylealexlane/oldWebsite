//CHANGING THE NAVBAR BACKGROUND COLOR and FADE BOXES IN
$(function(){
    $(window).scroll(function() {
        var scroll = $(window).scrollTop(); // how many pixels you've scrolled
        var os = $('#about').offset().top; // pixels to the top of about section
        var navHeight = $('#mainNav').height(); // height of navbar
        //Change color of navbar once past the height intro and navbar
        if(scroll > os - navHeight){
            $('#mainNav').addClass('darkNavBackground');
        }
        if(scroll < os - navHeight ){
            $('#mainNav').removeClass('darkNavBackground');
        }
        
        //FOR MACBOOK CLOSING ANIMATION
        var containOffset = $('#projects2').offset().top;
        if(scroll > containOffset + 10){
            $('#EauthMac').addClass('EauthStep1');
        }
        if(scroll < containOffset + 10){
            $('#EauthMac').removeClass('EauthStep1');
        }
        if(scroll > containOffset + 30){
            $('#EauthMac').addClass('EauthStep2');
        }
        if(scroll < containOffset + 30){
            $('#EauthMac').removeClass('EauthStep2');
        }
        if(scroll > containOffset + 50){
            $('#EauthMac').addClass('EauthStep3');
        }
        if(scroll < containOffset + 50){
            $('#EauthMac').removeClass('EauthStep3');
        }
        if(scroll > containOffset + 70){
            $('#EauthMac').addClass('EauthStep4');
        }
        if(scroll < containOffset + 70){
            $('#EauthMac').removeClass('EauthStep4');
        }
        if(scroll > containOffset + 90){
            $('#EauthMac').addClass('EauthStep5');
        }
        if(scroll < containOffset + 90){
            $('#EauthMac').removeClass('EauthStep5');
        }
        if(scroll > containOffset + 110){
            $('#EauthMac').addClass('EauthStep6');
        }
        if(scroll < containOffset + 110){
            $('#EauthMac').removeClass('EauthStep6');
        }
        if(scroll > containOffset + 130){
            $('#EauthMac').addClass('EauthStep7');
        }
        if(scroll < containOffset + 130){
            $('#EauthMac').removeClass('EauthStep7');
        }
        if(scroll > containOffset + 140){
            $('#EauthMac').addClass('EauthStep8');
        }
        if(scroll < containOffset + 140){
            $('#EauthMac').removeClass('EauthStep8');
        }
        if(scroll > containOffset + 160){
            $('#EauthMac').addClass('EauthStep9');
        }
        if(scroll < containOffset + 160){
            $('#EauthMac').removeClass('EauthStep9');
        }
        if(scroll > containOffset + 180){
            $('#EauthMac').addClass('EauthStep10');
        }
        if(scroll < containOffset + 180){
            $('#EauthMac').removeClass('EauthStep10');
        }
        if(scroll > containOffset + 200){
            $('#EauthMac').addClass('EauthStep11');
        }
        if(scroll < containOffset + 200){
            $('#EauthMac').removeClass('EauthStep11');
        }
        if(scroll > containOffset + 220){
            $('#EauthMac').addClass('EauthStep12');
        }
        if(scroll < containOffset + 220){
            $('#EauthMac').removeClass('EauthStep12');
        }
        if(scroll > containOffset + 240){
            $('#EauthMac').addClass('EauthStep13');
        }
        if(scroll < containOffset + 240){
            $('#EauthMac').removeClass('EauthStep13');
        }
        if(scroll > containOffset + 260){
            $('#EauthMac').addClass('EauthStep14');
        }
        if(scroll < containOffset + 260){
            $('#EauthMac').removeClass('EauthStep14');
        }
        
        //FOR EAUTH TEXT OVER MACS
                //FIRST BLOCK OF TEXT
        if(scroll > containOffset + 300 & scroll < containOffset + 600){
            $('.EauthHidden1').addClass('showTextProjects');
        }
        else{
            $('.EauthHidden1').removeClass('showTextProjects');
        }
        if(scroll > containOffset + 600 & scroll < containOffset + 750){
            $('.EauthHidden1').addClass('fadeTextProjects');
        }
        else{
            $('.EauthHidden1').removeClass('fadeTextProjects');
        }
                //SECOND BLOCK OF TEXT
        if(scroll > containOffset + 750 & scroll < containOffset + 1050){
            $('.EauthHidden2').addClass('showTextProjects');
        }
        else{
            $('.EauthHidden2').removeClass('showTextProjects');
        }
        if(scroll > containOffset + 1050 & scroll < containOffset + 1200){
            $('.EauthHidden2').addClass('fadeTextProjects');
        }
        else{
            $('.EauthHidden2').removeClass('fadeTextProjects');
        }
                //THIRD BLOCK OF TEXT
        if(scroll > containOffset + 1200 & scroll < containOffset + 1500){
            $('.EauthHidden3').addClass('showTextProjects');
        }
        else{
            $('.EauthHidden3').removeClass('showTextProjects');
        }
        if(scroll > containOffset + 1500 & scroll < containOffset + 1650){
            $('.EauthHidden3').addClass('fadeTextProjects');
        }
        else{
            $('.EauthHidden3').removeClass('fadeTextProjects');
        }
        
        
        //MMS TEXT CONTAIN DISTANCE FROM TOP
        var OffsetMMS = $('#firstNationContain').offset().top;
                //FADE IPAD IN
        if (scroll > OffsetMMS - 300){
            $('.firstNationMac').addClass('showFNIpad');
        }
        else{
            $('.firstNationMac').removeClass('showFNIpad');
        }
        //FOR FN MMS TEXT
                //FIRST BLOCK OF TEXT
        if(scroll > OffsetMMS + 0 & scroll < OffsetMMS + 300){
            $('.MMSHidden1').addClass('showTextProjects');
            $('.firstNationMac').removeClass('firstNationMacSecond');
        }
        else{
            $('.MMSHidden1').removeClass('showTextProjects');
        }
        if(scroll > OffsetMMS + 300 & scroll < OffsetMMS + 450){
            $('.MMSHidden1').addClass('fadeTextProjects');
        }
        else{
            $('.MMSHidden1').removeClass('fadeTextProjects');
        }
                //SECOND BLOCK OF TEXT
        if(scroll > OffsetMMS + 450 & scroll < OffsetMMS + 750){
            $('.MMSHidden2').addClass('showTextProjects');
            $('.firstNationMac').addClass('firstNationMacSecond');
        }
        else{
            $('.MMSHidden2').removeClass('showTextProjects');
        }
        if(scroll > OffsetMMS + 750 & scroll < OffsetMMS + 900){
            $('.MMSHidden2').addClass('fadeTextProjects');
        }
        else{
            $('.MMSHidden2').removeClass('fadeTextProjects');
        }
    
        //FOR SPARK CONTAINER DISTANCE
        
        //FOR SPARK MAC ANIMATION
        var containOffset = $('#projectsSparkContain').offset().top;
        if(scroll > containOffset + 10){
            $('#sparkMac').addClass('sparkStep1');
        }
        if(scroll < containOffset + 10){
            $('#sparkMac').removeClass('sparkStep1');
        }
        if(scroll > containOffset + 30){
            $('#sparkMac').addClass('sparkStep2');
        }
        if(scroll < containOffset + 30){
            $('#sparkMac').removeClass('sparkStep2');
        }
        if(scroll > containOffset + 50){
            $('#sparkMac').addClass('sparkStep3');
        }
        if(scroll < containOffset + 50){
            $('#sparkMac').removeClass('sparkStep3');
        }
        if(scroll > containOffset + 70){
            $('#sparkMac').addClass('sparkStep4');
        }
        if(scroll < containOffset + 70){
            $('#sparkMac').removeClass('sparkStep4');
        }
        if(scroll > containOffset + 90){
            $('#sparkMac').addClass('sparkStep5');
        }
        if(scroll < containOffset + 90){
            $('#sparkMac').removeClass('sparkStep5');
        }
        if(scroll > containOffset + 110){
            $('#sparkMac').addClass('sparkStep6');
        }
        if(scroll < containOffset + 110){
            $('#sparkMac').removeClass('sparkStep6');
        }
        if(scroll > containOffset + 130){
            $('#sparkMac').addClass('sparkStep7');
        }
        if(scroll < containOffset + 130){
            $('#sparkMac').removeClass('sparkStep7');
        }
        if(scroll > containOffset + 140){
            $('#sparkMac').addClass('sparkStep8');
        }
        if(scroll < containOffset + 140){
            $('#sparkMac').removeClass('sparkStep8');
        }
        if(scroll > containOffset + 160){
            $('#sparkMac').addClass('sparkStep9');
        }
        if(scroll < containOffset + 160){
            $('#sparkMac').removeClass('sparkStep9');
        }
        if(scroll > containOffset + 180){
            $('#sparkMac').addClass('sparkStep10');
        }
        if(scroll < containOffset + 180){
            $('#sparkMac').removeClass('sparkStep10');
        }
        if(scroll > containOffset + 200){
            $('#sparkMac').addClass('sparkStep11');
        }
        if(scroll < containOffset + 200){
            $('#sparkMac').removeClass('sparkStep11');
        }
        if(scroll > containOffset + 220){
            $('#sparkMac').addClass('sparkStep12');
        }
        if(scroll < containOffset + 220){
            $('#sparkMac').removeClass('sparkStep12');
        }
        if(scroll > containOffset + 240){
            $('#sparkMac').addClass('sparkStep13');
        }
        if(scroll < containOffset + 240){
            $('#sparkMac').removeClass('sparkStep13');
        }
        if(scroll > containOffset + 260){
            $('#sparkMac').addClass('sparkStep14');
        }
        if(scroll < containOffset + 260){
            $('#sparkMac').removeClass('sparkStep14');
        }
        //FOR SPARK TEXT
                //FIRST BLOCK OF TEXT
        if(scroll > containOffset + 300 & scroll < containOffset + 600){
            $('.sparkHidden1').addClass('showTextProjects');
        }
        else{
            $('.sparkHidden1').removeClass('showTextProjects');
        }
        if(scroll > containOffset + 600 & scroll < containOffset + 750){
            $('.sparkHidden1').addClass('fadeTextProjects');
        }
        else{
            $('.sparkHidden1').removeClass('fadeTextProjects');
        }
                //SECOND BLOCK OF TEXT
        if(scroll > containOffset + 750 & scroll < containOffset + 1050){
            $('.sparkHidden2').addClass('showTextProjects');
        }
        else{
            $('.sparkHidden2').removeClass('showTextProjects');
        }
        if(scroll > containOffset + 1050 & scroll < containOffset + 1200){
            $('.sparkHidden2').addClass('fadeTextProjects');
        }
        else{
            $('.sparkHidden2').removeClass('fadeTextProjects');
        }
                //THIRD BLOCK OF TEXT
        if(scroll > containOffset + 1200 & scroll < containOffset + 1500){
            $('.sparkHidden3').addClass('showTextProjects');
        }
        else{
            $('.sparkHidden3').removeClass('showTextProjects');
        }
        if(scroll > containOffset + 1500 & scroll < containOffset + 1650){
            $('.sparkHidden3').addClass('fadeTextProjects');
        }
        else{
            $('.sparkHidden3').removeClass('fadeTextProjects');
        }
        //FOR BOXES DISPLAYING
        var viewportHeight = $(window).height();
        var offset = 50;
        
        $("#box1,#box3,#box4,#box7,#box9,#box11,#box12,#box13,#box14,#box15,#box16,#box17,#box18,#box19,#box20,#box21,#box22,#box23,#box24,#box25,#box26,#box27,#box28,#box29,#box30,#box31,#box32,#box33,#box34,#box35,#box36,#box37,#box38,#box39,#box40,#box41,#box42,#box43,#box44,#box45,#box46,#box47,#box48,#box49,#box50,#box51,#box52,#box53,#box54,#box55,#box56,#box57,#box58,#box59,#box60,#box61,#box62,#box63,#box64,#box65,#box66,#box67,#box68,#box69,#box70,#box71,#box72,#box73,#box74,#box75,#box76,#box77,#box78,#box79,#box80,#box81,#box82,#box83,#box84,#box85,#box86,#box87,#box88,#box89,#box90,#box91,#box92,#box93,#box94,#box95,#box96,#box97,#box98,#box99,#box100,#box101,#box102,#box103,#box104,#box105,#box106,#box107,#box108,#box109,#box110,#box111,#box112,#box113,#box114,#box115,#box116,#box117,#box118,#box119,#box120,#box121,#box122,#box123,#box124,#box125,#box126,#box127,#box128,#box129,#box130,#box131,#box132,#box133,#box134,#box135,#box136,#box137,#box138,#box139,#box140,#box141,#box142,#box143,#box144,#box145,#box146,#box147,#box148,#box149,#box150,#box151,#box152,#box153,#box154,#box155,#box156,#box157,#box158,#box159,#box160,#box161,#box162,#box163,#box164,#box165,#box166,#box167,#box168,#box169,#box170,#box171,#box172,#box173,#box174,#box175,#box176,#box177,#box178,#box179,#box180,#box181,#box182,#box183,#box184,#box185,#box186,#box187,#box188,#box189,#box190,#box191,#box192,#box193,#box194,#box195,#box196,#box197,#box198,#box199").each(function(){
            
            if(scroll > $(this).offset().top - viewportHeight + offset + Math.ceil(Math.random()*(viewportHeight/1.7))){
                $(this).addClass('fadeInBox');
            }
            if(scroll < $(this).offset().top - viewportHeight){
                $(this).removeClass('fadeInBox');
            }
        });
    });
            
    
});

//FUNCTION FOR DISPLAYING EXPERIENCE ON CLICK
$(function() {
    $( "#box109" ).click(function() {
        $("#hiddenSpan1").toggleClass( "showSpan" );
    });
});
$(function() {
    $( "#box113" ).click(function() {
        $("#hiddenSpan2").toggleClass( "showSpan" );
    });
});

$(function() {
    $( "#box121" ).click(function() {
        $("#hiddenSpan3").toggleClass( "showSpan" );
    });
});
             

//PRELOADER ANIMATION
$(window).on('load', function() { // makes sure the whole site is loaded 
            $('#status').fadeOut(); // will first fade out the loading animation 
            $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
            $('body').delay(350).css({'overflow':'visible'});
})

//SMOOTH SCROLLING
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
