$(function(){

AOS.init({
	once: true
});


jQuery('#nav-icon4').click(function(){
  jQuery(this).toggleClass('open');
  jQuery('.mainMenu').toggleClass('activeMenu');
  jQuery('body').toggleClass('fixed');
});


$(".arrowIcon").append("<svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink=' http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 492 421' style='enable-background:new 0 0 492 421;' xml:space='preserve'><g><g><path d='M484.1,191.9L306.5,14.2c-5.1-5.1-11.8-7.9-19-7.9c-7.2,0-14,2.8-19,7.9l-16.1,16.1c-5.1,5.1-7.9,11.8-7.9,19 c0,7.2,2.8,14.2,7.9,19.3l103.7,103.9H26.6C11.7,172.5,0,184.1,0,199v22.8c0,14.9,11.7,27.6,26.6,27.6h330.5L252.2,353.9c-5.1,5.1-7.9,11.7-7.9,18.9c0,7.2,2.8,13.9,7.9,18.9l16.1,16.1c5.1,5.1,11.8,7.8,19,7.8c7.2,0,14-2.8,19-7.9l177.7-177.7c5.1-5.1,7.9-11.9,7.9-19.1C492,203.8,489.2,197,484.1,191.9z'/></g></g></svg>");


	jQuery('.smoothClick, .smoothLink a').click(function() {
	var dis = jQuery(this);
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	  var target = jQuery(this.hash);
	  target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
	  if (target.length) {
		$('html, body').animate({
		  scrollTop: target.offset().top-100
		}, 1000);
		return false;
	  }
	}
  });


$(window).scroll(function() {   
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $(".backToTop").addClass("show");
        $("header.header").addClass("fixed");
    } else {
        $(".backToTop").removeClass("show");
        $("header.header").removeClass("fixed");
    }
});




$('.defaultBtn').on('touchend', function() {
    $(this).click();
});




 $("header.header .mainMenu.homeMenu ul li:first-child a").addClass("active");




/* --- Home Menu active----- */
$(window).scroll(function() {   
    var scroll = $(window).scrollTop();
    if (scroll >= 0 && scroll <= 600) {
        $("header.header .mainMenu.homeMenu ul li:first-child a").addClass("active");
    }
    else {
        $("header.header .mainMenu.homeMenu ul li:first-child a").removeClass("active"); 
    }
});

/* --- Technology Menu active----- */
$(window).scroll(function() {   
    var scroll = $(window).scrollTop();
    if (scroll >= 600 && scroll <= 1200) {
        $("header.header .mainMenu.homeMenu ul li:nth-child(2) a").addClass("active");
    }
    else {
        $("header.header .mainMenu.homeMenu ul li:nth-child(2) a").removeClass("active"); 
    }
});
/* --- Solution Menu active----- */
$(window).scroll(function() {   
    var scroll = $(window).scrollTop();
    if (scroll >= 1200 && scroll <= 2000) {
        $("header.header .mainMenu.homeMenu ul li:nth-child(3) a").addClass("active");
    }
    else {
        $("header.header .mainMenu.homeMenu ul li:nth-child(3) a").removeClass("active"); 
    }
});
/* --- About Menu active----- */
$(window).scroll(function() {   
    var scroll = $(window).scrollTop();
    if (scroll >= 2800 && scroll <= 3200) {
        $("header.header .mainMenu.homeMenu ul li:nth-child(5) a").addClass("active");
    }
    else {
        $("header.header .mainMenu.homeMenu ul li:nth-child(5) a").removeClass("active"); 
    }
});



}); //---Main Function Close








// $(window).scroll(function() {    
//     var scroll = $(window).scrollTop();

//     if (scroll == 500) {
//         $(".menu-item-114").addClass("active");
//     } else {
//         $(".menu-item-114").removeClass("active");
//     }
// });

