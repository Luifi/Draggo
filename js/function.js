$(document).ready(function(){
    
    // Animation
    var dropdown = $('.dropdown ul').hide();
    
    $('a.arrow').click(function(){
        $(dropdown).slideToggle();
    });

    // Text first item
    var firstItem = $('.dropdown__list .dropdown__list__item:first-child').text();
	$('.dropdown__box span').append(firstItem);

	// Change text item
    $('.dropdown__list .dropdown__list__item').click(function(e){
    	e.preventDefault();
    	var text = $(this).text();
 
    	$('.dropdown__box span').text("");
    	$('.dropdown__box span').append(text);
    });
    
});