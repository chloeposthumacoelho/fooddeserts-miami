$(document).ready(function(){
    $("#box1 .colorLayer").animate({left:"0px"},300);
    $("#box1 .colorLayer").delay(500).animate({left:"650px"},300);
    $("#box1 .title").animate({left:"0px"});

    $("#box2 .colorLayer").delay(300).animate({left:"0px"},300);
    $("#box2 .colorLayer").delay(500).animate({left:"650px"},300);
    $("#box2 .title").delay(300).animate({left:"0px"});

    $(window).scroll(function(){

        if($(this).scrollTop() >= 150 && $(this).scrollTop() <= 500)
        {
            $(".colorLayer2").animate({left:"0px"},150);
            $(".image img").animate({left:"0px"});
            $(".colorLayer2").delay(300).animate({left:"850px"},300);
            $(".colorLayer2").delay(300).animate({width:"0px"},300);
			/* ".delay(x). is the speed at which the coloured shape animation happens */

            $(".colorLayer3").delay(300).animate({left:"0px"},300);
            $(".info").delay(300).animate({left:"0px"});
            $(".colorLayer3").delay(400).animate({left:"450px"},300);
            $(".colorLayer3").delay(400).animate({width:"0px"},300);
			
        }
		
		if($(this).scrollTop() >= 700 && $(this).scrollTop() <= 2000)
        {
			$(".colorLayer4").animate({left:"0px"},150);
            $(".image2 img").animate({left:"0px"});
            $(".colorLayer4").delay(300).animate({left:"850px"},300);
            $(".colorLayer4").delay(300).animate({width:"0px"},300);
			/* ".delay(x). is the speed at which the coloured shape animation happens */
			
			$(".colorLayer5").delay(300).animate({left:"0px"},300);
            $(".info2").delay(300).animate({left:"0px"});
            $(".colorLayer5").delay(400).animate({left:"450px"},300);
            $(".colorLayer5").delay(400).animate({width:"0px"},300);
			
        }
		
		if($(this).scrollTop() >= 700 && $(this).scrollTop() <= 3000)
        {
			$(".colorLayer6").animate({left:"0px"},600);
            $(".image3 img").animate({left:"0px"});
            $(".colorLayer6").delay(300).animate({left:"850px"},800);
            $(".colorLayer6").delay(300).animate({width:"0px"},800);
			/* ".delay(x). is the speed at which the coloured shape animation happens */
			
			$(".colorLayer7").delay(300).animate({left:"0px"},800);
            $(".info3").delay(300).animate({left:"0px"});
            $(".colorLayer7").delay(400).animate({left:"450px"},800);
            $(".colorLayer7").delay(400).animate({width:"0px"},800);
			
        }
		
		if($(this).scrollTop() >= 700 && $(this).scrollTop() <= 5000)
        {
			$(".colorLayer8").animate({left:"0px"},1000);
            $(".image4 img").animate({left:"0px"});
            $(".colorLayer8").delay(300).animate({left:"850px"},1200);
            $(".colorLayer8").delay(300).animate({width:"0px"},1200);
			/* ".delay(x). is the speed at which the coloured shape animation happens */
			
			$(".colorLayer9").delay(300).animate({left:"0px"},1200);
            $(".info4").delay(300).animate({left:"0px"});
            $(".colorLayer9").delay(400).animate({left:"450px"},1200);
            $(".colorLayer9").delay(400).animate({width:"0px"},1200);
			
        }
		
		if($(this).scrollTop() >= 700 && $(this).scrollTop() <= 7000)
        {
			$(".colorLayer10").animate({left:"0px"},1400);
            $(".image5 img").animate({left:"0px"});
            $(".colorLayer10").delay(300).animate({left:"850px"},1400);
            $(".colorLayer10").delay(300).animate({width:"0px"},1400);
			/* ".delay(x). is the speed at which the coloured shape animation happens */
			
			$(".colorLayer11").delay(300).animate({left:"0px"},1400);
            $(".info5").delay(300).animate({left:"0px"});
            $(".colorLayer11").delay(400).animate({left:"450px"},1400);
            $(".colorLayer11").delay(400).animate({width:"0px"},1400);
			
        }
		
		if($(this).scrollTop() >= 700 && $(this).scrollTop() <= 9000)
        {
			$(".colorLayer12").animate({left:"0px"},1600);
            $(".image6 img").animate({left:"0px"});
            $(".colorLayer12").delay(300).animate({left:"850px"},1600);
            $(".colorLayer12").delay(300).animate({width:"0px"},1600);
			/* ".delay(x). is the speed at which the coloured shape animation happens */
			
			$(".colorLayer13").delay(300).animate({left:"0px"},1600);
            $(".info6").delay(300).animate({left:"0px"});
            $(".colorLayer13").delay(400).animate({left:"450px"},1600);
            $(".colorLayer13").delay(400).animate({width:"0px"},1600);
			
        }
		
		if($(this).scrollTop() >= 700 && $(this).scrollTop() <= 1100)
        {
			$(".colorLayer14").animate({left:"0px"},1800);
            $(".image7 img").animate({left:"0px"});
            $(".colorLayer14").delay(300).animate({left:"850px"},1800);
            $(".colorLayer14").delay(300).animate({width:"0px"},1800);
			/* ".delay(x). is the speed at which the coloured shape animation happens */
			
			$(".colorLayer15").delay(300).animate({left:"0px"},1800);
            $(".info7").delay(300).animate({left:"0px"});
            $(".colorLayer15").delay(400).animate({left:"450px"},1800);
            $(".colorLayer15").delay(400).animate({width:"0px"},1800);
			
        }
		
		if($(this).scrollTop() >= 700 && $(this).scrollTop() <= 1300)
        {
			$(".colorLayer16").animate({left:"0px"},2000);
            $(".image8 img").animate({left:"0px"});
            $(".colorLayer16").delay(300).animate({left:"850px"},2000);
            $(".colorLayer16").delay(300).animate({width:"0px"},2000);
			/* ".delay(x). is the speed at which the coloured shape animation happens */
			
			$(".colorLayer17").delay(300).animate({left:"0px"},2000);
            $(".info8").delay(300).animate({left:"0px"});
            $(".colorLayer17").delay(400).animate({left:"450px"},2000);
            $(".colorLayer17").delay(400).animate({width:"0px"},2000);
			
        }
		
		
    });
	
	window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

});

/* Slider effect for MassDeforestation.html */ 

 $(document).ready(function(){
               $("#link1").click(function(){
                    $path=$("#box1").offset().top;
                    $('body').animate({scrollTop:$path},1000);
               });
               $("#link2").click(function(){
                    $path=$("#box2").offset().top;
                    $('body').animate({scrollTop:$path},1000);
               });
               $("#link3").click(function(){
                    $path=$("#box3").offset().top;
                    $('body').animate({scrollTop:$path},1000);
               });
               $("#link4").click(function(){
                    $path=$("#box4").offset().top;
                    $('body').animate({scrollTop:$path},1000);
               });
            });
/* end of slider effect for MassDeforestation.html */ 

/*
=====
=====
CarbonPollution.html 
=====
=====
*/ 

	














