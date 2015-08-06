$(document).ready(function () {
	navToggle();
	closeNav();
	tabs();
	accordionToggle();
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
	
	
function tabs() {
    
    $( '.tab' ).click( function() {
        var $tabclicked = $( this );
        var $tabsection = $tabclicked.closest('section');
            
        //clean up
       $tabsection.find('.tab__content' ).hide();
       $tabsection.find( '.tab' ).removeClass( 'tab--active' );
            
        //show new tab
        $tabclicked.addClass( 'tab--active' );
        $( $tabclicked.attr('href') ).show();

        return false;
    });
        
    //hide all the tabs panels
    $( '.tab__content' ).hide();
        
    //click the first tab
    //$('.tab').first().click();
    

	$(".wrap--tabs").each(function() {
        //$(this).css('background','red');
        //$(this).find('.tab').first().css('background','red');
        $(this).find('.tab').first().click();
    });
    
}

function accordionToggle() {
    $('.tab--mobile').click(function() {
        $(this).next().toggleClass('tab__content--show');
        return false;
    });
}