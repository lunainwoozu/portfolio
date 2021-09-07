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


		$(document).ready(function(){
			$(".M_toggle").click(function(){
				$(".M_nav").toggleClass("open");
			});
		});


$(document).ready(function(){
   pcNav();
   mNav();
   // 화면 너비가 768px보다 커지면 m_nav 사라짐
   $(window).resize(function(){
     let width = window.outerWidth;
     if(width >= 768){
       m_nav.css({right: "-"+100+"%"});
     }
   })
   
 })
