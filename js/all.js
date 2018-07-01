$(document).ready(function () {
    $('.scroll-nav a').click(function (event) {
        /* Act on the event */
        event.preventDefault();
        $('html,body').animate({ scrollTop: $('#nav').offset().top }, 800);
    });
    $('.scroll-about a').click(function (event) {
        /* Act on the event */
        event.preventDefault();
        $('html,body').animate({ scrollTop: $('#aboutMe').offset().top - 50 }, 800);
    });
    $('.scroll-skills a').click(function (event) {
        /* Act on the event */
        event.preventDefault();
        $('html,body').animate({ scrollTop: $('#skills').offset().top -50}, 800);
    });
    $('.scroll-works a').click(function (event) {
        /* Act on the event */
        event.preventDefault();
        $('html,body').animate({ scrollTop: $('#works').offset().top -50}, 800);
    });
    $('.top a').click(function (event) {
        /* Act on the event */
        event.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 500);
    });
    $(window).scroll(function () {
        var scrollPos = $(window).scrollTop();
        var scrollVal = $(this).scrollTop();
        if (scrollVal > 180) {
            $('.me-img').addClass('showMe');
            $('.me-content').addClass('showMe');
        };
        if (scrollVal > 1000) {
            $('.skills-ani').addClass('active');
        };
        if (scrollVal > 1340) {
            $('.works-ani').addClass('active');
        };
        // $('#home').css('background-position-y', -(scrollPos/1) + 'px');
        $('#skills').css('background-position-y', -(scrollPos / 2) + 'px');
    });
});