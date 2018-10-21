

// -------------------------------------           JQUERY            -------------------------------------

// JQUERY VARIABLES

$(document).ready(function(){

	$(".frame-trigger").mouseenter(function(){
		$(".frame-bottom").css("box-shadow", "20px -5px 0 0 var(--primarySalmon)");
		$(".pair-frame2").css("box-shadow", "-20px 15px 0 0 var(--primarySalmon)");
		$(".thin-accent").css("color","var(--primarySalmon)");
		$(".framed-txt-lrg").css("color","var(--primarySalmon)");
		$(".btn-txt").css("color","var(--primarySalmon)");
		$(".g6-flash1").fadeIn(400);
	});

	$(".frame-trigger").mouseleave(function(){
		$(".frame-bottom").css("box-shadow", "20px -5px 0 0 var(--lightBlue)");
		$(".pair-frame2").css("box-shadow", "none");
		$(".thin-accent").css("color","var(--lightBlue)");
		$(".framed-txt-lrg").css("color","white");
		$(".btn-txt").css("color","white");
		$(".g6-flash1").fadeOut(500);
	});

	$(".hero-btn1").mouseenter(function(){
		$(".hero-g1").fadeIn(400);
	});

	$(".hero-btn1").mouseleave(function(){
		$(".hero-g1").fadeOut(500);
	});

	$(".hero-btn2").mouseenter(function(){
		$(".hero-g2").fadeIn(400);
	});

	$(".hero-btn2").mouseleave(function(){
		$(".hero-g2").fadeOut(500);
	});

});