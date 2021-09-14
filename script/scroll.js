$(document).ready(function() {
    let scroll = {
        offset: 0,
        offsets: null,
        targets: null,
        $selector: [],
        
        init: function(obj) {
            let that = this;
            $('[data-scroll]').each(function(i) {
                that.$selector[i] = $(this);
            });
            this.onResized();
            this.onScroll();
            $(window).on( 'resize', $.proxy( this.onResized, this ));
            $(window).on( 'scroll', $.proxy( this.onScroll, this ));
        },

        kill: function() {
            $(window).off( 'resize', $.proxy( this.onResized, this ));
            $(window).off( 'scroll', $.proxy( this.onScroll, this ));
        },

        onResized: function(e) {
            let that = this;
            let pos = 1.5;  // 마우스휠 - 전체애니 1.4 
            let offsets = Math.round($(window).height()/pos);
            that.offsets = $([]);
            that.targets = $([]);
            $.map(that.$selector, function(selector, i) {
                let $el = $(selector);
                let $offsets = Number($el.data('scroll-offset'));
                let top = Math.round( $el.offset().top ) - ($offsets || offsets);
                that.offsets.push( top );
                that.targets.push( $el );
            });
        },

        onScroll: function(e) {
            let that = this;
            for (i = that.offsets.length; i--;) {
                that.checkScroll( that.offsets[i], that.targets[i], "show");
            }
        },

        checkScroll: function( limit, $el, className ) {
            let currentScrollPos = $(document).scrollTop();
            if (currentScrollPos > limit) {
                $el.addClass(className);
            } else {
                $el.removeClass(className);
            }
        }
    }

    scroll.init();

});


        
$(document).ready(function(){
    wh=$(window).height();
    $(".wh")=window.height();
});

 $(window).scroll(function(){
 let $window = $(window),
 $slider = $('.back_slider');
   
 let scroll = ($window.scrollTop() / ($(document).height() - $window.height())) * 100;
     
         
 if(scroll < 20){
     $slider.stop().animate({top: "-830"})
     $("#navi li").css({color: "white"})
 } 
 if(scroll > 20){
    $slider.stop().animate({top: "-730"})
     $("#navi li").eq(0).css({color: "#055aaa"})
     $("#navi li").eq(1).css({color: "white"})
     $("#navi li").eq(2).css({color: "white"})
     $("#navi li").eq(3).css({color: "white"})
 } 

if(scroll > 30){
    $(".section02 .text").addClass("subject")
 } else {
     $(".section02 .text").removeClass("subject")
 }
if (matchMedia("screen and (max-width: 640px)").matches) { if(scroll > 25){
    $(".section02 .text").addClass("subject")
 } else {
     $(".section02 .text").removeClass("subject")
 } }
   
 if(scroll > 40){
    $slider.stop().animate({top: "-650"})
     $("#navi li").eq(1).css({color: "#055aaa"})
     $("#navi li").eq(2).css({color: "white"})
     $("#navi li").eq(3).css({color: "white"})

 }
   
 if(scroll > 60){
    $slider.stop().animate({top: "-580"})
     $("#navi li").eq(2).css({color: "#055aaa"})
     $("#navi li").eq(3).css({color: "white"})

 }  
 
 if(scroll > 80){
    $slider.stop().animate({top: "-480"})
     $("#navi li").eq(3).css({color: "#055aaa"})
 }
   
});