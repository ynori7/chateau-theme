jQuery.noConflict();
jQuery(document).ready(function(){
	var mainItems = jQuery('#menu ul:first > li'); 
	var mainLink = jQuery(mainItems).children('a');
	jQuery(mainLink).hover(
		function(){
			var mlSiblings = jQuery(this).parent().siblings();
			var submenu = jQuery(this).next('ul');
			if (submenu.length > 0){
				jQuery(submenu).show();
				jQuery(mlSiblings).children('ul').hide();
				jQuery(this).addClass('menuHover');
				jQuery(mlSiblings).children('a').removeClass('menuHover');
			}
		}
	);
	jQuery(mainItems).mouseleave(function(){
		jQuery(this).children('ul').hide();
		jQuery(this).children('a').removeClass('menuHover');
	});
});