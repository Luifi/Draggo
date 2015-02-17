$(document).ready(function(){
    
    // Animation    
    $('.dropdown__box__arrow').click(function(){
        $('.dropdown__list').slideToggle();
    });

    // Text first item
    var firstItem = $('.dropdown__list .dropdown__list__item:first-child').text();
	$('.dropdown__box .dropdown__box__text').append(firstItem);

	// Change text item
    $('.dropdown__list .dropdown__list__item').click(function(e){
    	e.preventDefault();
    	var text = $(this).text();
 
    	$('.dropdown__box .dropdown__box__text').text("");
    	$('.dropdown__box .dropdown__box__text').append(text);
    });
    
});