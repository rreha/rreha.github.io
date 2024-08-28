var pixel = 0
$(window).on('scroll', function () {
    pixel = $(document).scrollTop()/50;
    $(".bg").css({"-webkit-filter": "blur("+pixel+"px)","-moz-filter": "blur("+pixel+"px)","filter": "blur("+pixel+"px)"})     
});
function copyBanner() {
    if (navigator.clipboard) {
        navigator.clipboard.writeText('<a href="https://reha.foo.ng"><img src="https://reha.foo.ng/assets/images/reha.gif" border=0></a>')
    }
}