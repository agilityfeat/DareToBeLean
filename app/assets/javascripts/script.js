$(document).ready(function(){

	//Home Add/Remove Header Space and Shadow
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		if(scrollTop != 0)
		$('.welcomeHeader').stop().animate({
			height: ['200px', 'easeInCirc'],
		  	},100, 'linear'),
			$('.shadowHide').removeClass("bgHide");
		else
		$('.welcomeHeader').stop().animate({
			height: ['0', 'easeInCirc'],
		    },100, 'linear'),
			$('.shadowHide').addClass("bgHide");
	});	

	//Slide Pop
	$('.btnTopSlide, .d2blSlide').click(function() {
		$('#slideWrap').animate({
			height: ['650px', 'easeOutBounce'],
		  },1750, 'linear', function() {
		  });
	   	  $('.d2blSlide').fadeOut(100, function() {
		  	$('.slideNavWrap, .slideAjaxWrap').fadeIn(100);
		  });
	});
	
	$('.btnSignup, .btnLearn, .btnIdeas, .btnWhen').click(function() {
		$('#slideWrap').css("height","250px");
		$('.d2blSlide').fadeIn(100);
		$('.slideNavWrap, .slideAjaxWrap').fadeOut(100);
	});

	//Slide Initiation
	$('.slideWrap').cycle({ 
		fx: 'fade',
		speed: 10, 
    	timeout: 0,
        prev:    '#prev',
        next:    '#next',
	});
	
	//Slide Ajax Load
	
	
	//BTN Fade
	$(".normalFade").fadeTo(5, .2);

	$(".normalFade").hover(function() {
		$(this).stop().fadeTo(200, .65);
		},function(){
			$(this).stop().fadeTo(200, .2);;
	});	

	// Auto Scroll Initiation
	$.localScroll({
	axis:'y',
	queue:true,
	easing: 'easeOutBack', 	
	duration: 1000,	
	offset: {top:-50, left:0} });

	// Parallax 
	$window = $(window);
	// Cache the Y offset and the speed of each sprite
	$('[data-type]').each(function() {	
		$(this).data('offsetY', parseInt($(this).attr('data-offsetY')));
		$(this).data('Xposition', $(this).attr('data-Xposition'));
		$(this).data('speed', $(this).attr('data-speed'));
	});
	// For each element that has a data-type attribute
	$('section[data-type="background"]').each(function(){
		// Store some variables based on where we are
		var $self = $(this),
			offsetCoords = $self.offset(),
			topOffset = offsetCoords.top;
		// When the window is scrolled...
	    $(window).scroll(function() {
			// If this section is in view
			if ( ($window.scrollTop() + $window.height()) > (topOffset) &&
				 ( (topOffset + $self.height()) > $window.scrollTop() ) ) {
				// Scroll the background at var speed
				// the yPos is a negative value because we're scrolling it UP!								
				var yPos = -($window.scrollTop() / $self.data('speed')); 
				// If this element has a Y offset then add it on
				if ($self.data('offsetY')) {
					yPos += $self.data('offsetY');
				}
				// Put together our final background position
				var coords = '50% '+ yPos + 'px';
				// Move the background
				$self.css({ backgroundPosition: coords });
				// Check for other sprites in this section	
				$('[data-type="sprite"]', $self).each(function() {
					// Cache the sprite
					var $sprite = $(this);
					// Use the same calculation to work out how far to scroll the sprite
					var yPos = -($window.scrollTop() / $sprite.data('speed'));					
					var coords = $sprite.data('Xposition') + ' ' + (yPos + $sprite.data('offsetY')) + 'px';
					$sprite.css({ backgroundPosition: coords });													
				}); // sprites
				// Check for any Videos that need scrolling
				$('[data-type="video"]', $self).each(function() {
					// Cache the video
					var $video = $(this);
					// There's some repetition going on here, so 
					// feel free to tidy this section up. 
					var yPos = -($window.scrollTop() / $video.data('speed'));					
					var coords = (yPos + $video.data('offsetY')) + 'px';
					$video.css({ top: coords });													
				}); // video	
			}; // in view
		}); // window scroll
	});	// each data-type
}); // document ready


