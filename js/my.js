$(document).ready(function(){
	/// top menu freeze
$(window).bind('scroll', function () {
    if ($(window).scrollTop() > ($(".wrap.style1").offset().top + $(".wrap.style1").outerHeight() - 50)) {
		var slide1=$("div.sliding_menu");
    	$(slide1).css("position","fixed"); 
  		$(slide1).slideDown("slow"); 
   }
});

	///carousel
	var owl = $(".owl-carousel");
	owl.owlCarousel({
		items: 1,
		dots: true,
		nav: true,
		navigation: true,
		slideSpeed: 300,
		paginationSpeed: 400,
		singleItem: true,
		autoHeight: true
	});
	$("#emptynext1").append("<div.owl-next><div class='next'><i class='fa fa-angle-right'></i></div></div>");
	$("#emptyprev1").append("<div.owl-prev><div class='prev'><i class='fa fa-angle-left'></i></div></div>");

	$( ".owl-next").remove();
	$( ".owl-prev").remove();
var owl1 = $('.owl-carousel').owlCarousel();
$(".prev").click(function () {
    owl1.trigger('prev.owl.carousel');
});
$(".next").click(function () {
   owl1.trigger('next.owl.carousel');
});



var images = ['carousel1.png', 'carousel2.png', 'carousel3.png'];
var thisImg = 0;

$("ul.navigate").children().each(function(i){
    $(this).click(function(){
        var index = i;
        console.log(index);
        $('.BigPik').css('background-image','url("img/carousel/'+ images[index]+'")');
    });
});



var images = ['cigar.jpg', 'newyearhorse.jpg', 'snowycouple.jpg'];
var thisImg = 0;

$("#navigate1").children().each(function(i){
    $(this).click(function(){
        var index = i;
        console.log(index);
        $('.BigPik').css('background-image','url("img/carousel/'+ images[index]+'")');
    });
});
	

});








