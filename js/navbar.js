$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if(scroll >= 20)
    	$( ".nav-wrapper" ).removeClass( "transparent" ).addClass( "red" );
    else
    	$( ".nav-wrapper" ).removeClass( "red" ).addClass( "transparent" );
});