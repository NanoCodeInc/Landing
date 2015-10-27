var indicator = 0;
$(document).on('ready',function(){
	$('.lft').on('click',function(e){
		e.preventDefault();
		moveSlider('lft');
	});

	$('.rgt').on('click',function(e){
		e.preventDefault();
		moveSlider('rgt');
	});

	defineSizes();
});

function defineSizes(){
	$('.form_container .slide').each(function(i,el){
		$(el).css({
			'background-image' : "url("+$(el).data("background")+")",
			'height':($('.form_container').width() * 0.45) + 'px',
			'width':($('.form_container').width()) + 'px',
		})
	});

	$('.form_container .slideContainer').css({
		'margin-left': -(indicator * $('form_container').width())+'px'
	});
}

function moveSlider(address){
	var limit = $('.form_container .slide').length;
	indicator = (address == 'rgt') ? indicator+1 : indicator-1;
	indicator = (indicator >= limit) ? 0 : indicator;
	indicator = (indicator < 0) ? limit-1 : indicator;

	$('.form_container .slideContainer').animate({
		'margin-left':-(indicator * $('.form_container').width())+'px'
	});
}