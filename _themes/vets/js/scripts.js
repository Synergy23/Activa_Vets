$(document).ready(function () {
	navToggle();
	closeNav();
});
function navToggle(){
	$('#toggle').click(function() {
	   $(this).toggleClass('active');
	   $('body').toggleClass('active');
	   $('#overlay').toggleClass('open');
	  });
	}

function closeNav(){
	$('.overlay_menu ul li a').click(function() {
		$('#toggle, body').removeClass('active');
		$('#overlay').removeClass('open');
		});
	}