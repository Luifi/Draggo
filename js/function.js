$(document).ready(function(){
    
    $('.dropdown').prepend('<p>Description</p>');
    
    var $dropdown = $('.dropdown ul').hide();
    
    $('a.arrow').click(function(){
        $($dropdown).slideToggle();
    });
    
});