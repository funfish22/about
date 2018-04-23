$(document).ready(function () {
    $('.scroll-nav a').click(function (event) {
        /* Act on the event */
        event.preventDefault();
        $('html,body').animate({ scrollTop: $('#nav').offset().top }, 800);
    });
    $('.scroll-about a').click(function (event) {
        /* Act on the event */
        event.preventDefault();
        $('html,body').animate({ scrollTop: $('#aboutMe').offset().top }, 800);
    });
    $('.scroll-skills a').click(function (event) {
        /* Act on the event */
        event.preventDefault();
        $('html,body').animate({ scrollTop: $('#skills').offset().top }, 800);
    });
    $('.scroll-works a').click(function (event) {
        /* Act on the event */
        event.preventDefault();
        $('html,body').animate({ scrollTop: $('#works').offset().top }, 800);
    });
    $('.top a').click(function (event) {
        /* Act on the event */
        event.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 500);
    });
});