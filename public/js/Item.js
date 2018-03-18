$(function(){
  $(".test li").hover(
    /*找父亲（li）下面的ul*/
    function() {
      $(this).find("ul").show(200);
    },function(){
      $(this).find("ul").hide(300);
    }
  );

  $(".test li").hover(
    function(){
      $(this).find("ul").fadeIn(300);
    },function(){
      $(this).find("ul").fadeOut(300);
    }
  );
});