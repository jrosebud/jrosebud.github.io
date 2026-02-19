$(document).ready(function() {
    $(".panel").hide();
    $(".mainlink").click(function(){
    	var thisLink = $(this).next();
    	$(".panel").not(thisLink).slideUp('800');
    	thisLink.slideToggle('800');
    	var currentLink = $(this);
    	$(".mainlink").not(currentLink).removeClass("active");
    	currentLink.toggleClass("active");
    	return false;
    });
});