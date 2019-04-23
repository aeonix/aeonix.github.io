// --------------------------------------------------------
//	Navigation Bar
// -------------------------------------------------------- 	
$(window).scroll(function(){	
	"use strict";	
	var scroll = $(window).scrollTop();
	if( scroll > 60 ){		
		$(".navbar").addClass("scroll-fixed-navbar");				
	} else {
		$(".navbar").removeClass("scroll-fixed-navbar");
	}
});

// --------------------------------------------------------
//	Smooth Scrolling
// -------------------------------------------------------- 	
$(".navbar-nav li a[href^='#']").on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $(this.hash).offset().top
    }, 1000);
});

// --------------------------------------------------------
//	Language Dropdown
// -------------------------------------------------------- 
$(function() {
	$('.langbtn').click(function(e){
    	$('.lang-dropdown-child').addClass('show-child');
    	e.stopPropagation();
	})
	$('body').click(function(){
    	$('.lang-dropdown-child').removeClass('show-child');
  	});
});