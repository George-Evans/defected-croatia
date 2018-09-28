// Current Year in Footer
const year = new Date().getFullYear();
$("#year").append(year);

// Date Countdown
$('#date-countdown').countdown('2019/08/08 14:00:00', function(event){
	$(this).html(event.strftime('<span class="countdown">%D</span> DAYS &nbsp;<span class="countdown">%H</span> HR &nbsp;<span class="countdown">%M</span> MIN &nbsp;<span class="countdown">%S</span> SEC'));
});

// Navbar BG on scroll
var navbarHeight = $('.navbar').outerHeight();
$(window).scroll(function () {
	if ($(window).scrollTop() > navbarHeight) {
		$('.navbar-bg').height(navbarHeight + 20);
		$('.home-hide').css('display', 'inline-block');
	} else {
		$('.navbar-bg').height('20px');
		$('.home-hide').hide();
	}
});

// Navbar Background Match height on Navbar Toggle
$('#croatiaNavbar').on('shown.bs.collapse', function () {
	var navbarOpenHeight = $('.navbar').outerHeight();
	$('.navbar-bg').height(navbarOpenHeight + 20);
})

$('#croatiaNavbar').on('hidden.bs.collapse', function () {
	$('.navbar-bg').height('20px');
})

// // FAQ Accordian + & -
// $('.plus-minus').on(show.bs.collapse, function () {
// 	$(this).html('-');
// })

