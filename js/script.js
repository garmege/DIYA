$(function(){
    $(".m_menu_open").on("click",mShow);
     function mShow (){
         $(".m_menu").css({"left":0});
     }
     $(".m_close").on("click",mHide);
     function mHide (){
         $(".m_menu").css({"left":-40+"%"});
     }
});