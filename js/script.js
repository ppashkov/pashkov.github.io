
  $(function() {
   $.fn.scrollToTop = function() {
    $(this).hide().removeAttr("href");
    if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
    var scrollDiv = $(this);
    $(window).scroll(function() {
     if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
     else $(scrollDiv).fadeIn("slow")
    });
    $(this).click(function() {
     $("html, body").animate({scrollTop: 0}, "slow")
    })
   }
  });
  
  $(function() {
   $("#go-top").scrollToTop();
  });

  function day(){
    $(".s1bg").css("background-image", "url(img/bg2.jpg)");
    $(".me").animate({
      backgroundColor: "rgba(180,180,180,0.60)",
    }, 600 );
    $(".skills").animate({
      backgroundColor: "rgba(150,150,150,0.60)",
    }, 600 );
    $(".wtl").animate({
      backgroundColor: "rgba(200,200,200,0.60)",
    }, 600 );
    $(".content").animate({
      backgroundColor: "rgba(160,160,160,0.75)",
    }, 600 );
    $(".txt").animate({
      color: "black",
    }, 600);
    $(".ghlink").css("filter","invert(0)");
   
  };

  function night(){

    $(".me").animate({
      backgroundColor: "rgba(20,20,20,0.80)",
    }, 600 );
    $(".skills").animate({
      backgroundColor: "rgba(12,12,12,0.80)",
    }, 600 );
    $(".wtl").animate({
      backgroundColor: "rgba(25,25,25,0.80)",
    }, 600 );
    $(".content").animate({
      backgroundColor: "rgba(20,20,20,0.85)",
    }, 600 );
    $(".txt").animate({
      color: "white",
    }, 600);
    $(".ghlink").css("filter","invert(1)")
    $(".s1bg").css("background-image", "url(img/bg.jpg)");
  
  };

  $(".day").click(function(){
   day();
  });
  $(".night").click(function(){
   night();
  });

  var d = new Date();
  var h = d.getHours();  
  if(h > 5 && h < 21) {
    day();
  }
  
  window.onload = function(){
    $(".s1bg").css("transition", ".5s");
  }