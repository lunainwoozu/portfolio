'use strict';

$(document).ready(function(){
   
   $(".slide").bxSlider({
      auto: true
   });

   // hamburger action
   let overlay_navigation = $('.overlay-navigation'),
    top_bar = $('.bar-top'),
    middle_bar = $('.bar-middle'),
    bottom_bar = $('.bar-bottom'),
    m_nav_li_a = $('nav li a');

    $('.open-overlay').click(function() {
         overlay_navigation.toggleClass('overlay-active');
         if (overlay_navigation.hasClass('overlay-active')) {
           top_bar.removeClass('animate-out-top-bar').addClass('animate-top-bar');
           middle_bar.removeClass('animate-out-middle-bar').addClass('animate-middle-bar');
           bottom_bar.removeClass('animate-out-bottom-bar').addClass('animate-bottom-bar');
           overlay_navigation.removeClass('overlay-slide-up').addClass('overlay-slide-down');
         } else {
           top_bar.removeClass('animate-top-bar').addClass('animate-out-top-bar');
           middle_bar.removeClass('animate-middle-bar').addClass('animate-out-middle-bar');
           bottom_bar.removeClass('animate-bottom-bar').addClass('animate-out-bottom-bar');
           overlay_navigation.removeClass('overlay-slide-down').addClass('overlay-slide-up');
         }
    });

    $(m_nav_li_a).click(function(){
        overlay_navigation.toggleClass('overlay-active');
         if (overlay_navigation.hasClass('overlay-active')) {
           top_bar.removeClass('animate-out-top-bar').addClass('animate-top-bar');
           middle_bar.removeClass('animate-out-middle-bar').addClass('animate-middle-bar');
           bottom_bar.removeClass('animate-out-bottom-bar').addClass('animate-bottom-bar');
           overlay_navigation.removeClass('overlay-slide-up').addClass('overlay-slide-down');
         } else {
           top_bar.removeClass('animate-top-bar').addClass('animate-out-top-bar');
           middle_bar.removeClass('animate-middle-bar').addClass('animate-out-middle-bar');
           bottom_bar.removeClass('animate-bottom-bar').addClass('animate-out-bottom-bar');
           overlay_navigation.removeClass('overlay-slide-down').addClass('overlay-slide-up');
         }

      // link height access
        let headerHeight = $("#navi").outerHeight();
        let href = $(this).attr("href");
        let target = $(href == "#" || href == "" ? "body" : href);
        let position = target.offset().top - headerHeight;
        $("html, body").animate({ scrollTop: position }, 600, "swing");
    });

   // link height access
    $("#navi h1 a").on("click", function(){
      let headerHeight = $("#navi").outerHeight();
      let href = $(this).attr("href");
      let target = $(href == "#" || href == "" ? "body" : href);
      let position = target.offset().top - headerHeight;
      $("html, body").animate({ scrollTop: position }, 600, "swing");
   });
});

function change1(seg){
   let tap = $(".bbt"+seg);
   $(tap).css({backgroundColor : '#ffda55',height : '80px', marginTop : "0", color:"#fff", fontSize: "170%"});
   $(tap).siblings().css({backgroundColor : '#055aaa',height : '50px', marginTop : "30px",color:"#ffda55", fontSize: "100%"});
   
   let slider = $(".box_list0"+seg);
   $(slider).css({display : 'block'});
   $(slider).siblings().css({display : 'none'})
}    
  
function change2(seg){
   let tap = $(".sbt"+seg);
   $(tap).css({backgroundColor : '#ffda55',height : '80px', marginTop : "0",  color:"#fff", fontSize: "170%"});
   $(tap).siblings().css({backgroundColor : '#055aaa',height : '50px', marginTop : "30px",color:"#ffda55", fontSize: "100%"});
   
   let slider = $(".store_list0"+seg);
   $(slider).css({display : 'block'});
   $(slider).siblings().css({display : 'none'})

}  

          
function tap01(seg){
   
   let tap = $(".tapb"+seg);
   $(tap).css({backgroundColor : 'rgba(255, 218, 85, 0.53)'});            
   $(tap).siblings().css({backgroundColor : '#fff'});
   
   
   let slist = $(".slist"+seg);     
     
   $(slist).css({display : 'block'});
   $(slist).siblings().css({display : 'none'});
  
    
}  

function tap02(seg){
   
   let tap = $(".tapb"+seg);
   $(tap).css({backgroundColor : 'rgba(255, 218, 85, 0.53)'});
   $(tap).siblings().css({backgroundColor : '#fff'});
   
   let slist = $(".slist"+seg);     
     
   $(slist).css({display : 'block'});
   $(slist).siblings().css({display : 'none'});
  
    
}  

function tap03(seg){
   let tap = $(".tapb"+seg);
   $(tap).css({backgroundColor : 'rgba(255, 218, 85, 0.53)'});
   $(tap).siblings().css({backgroundColor : '#fff'});
   
   let slist = $(".slist"+seg);     
     
   $(slist).css({display : 'block'});
   $(slist).siblings().css({display : 'none'});
} 
