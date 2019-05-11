$(document).ready(function () {
    $('.search').on('click', function (e) {
        e.preventDefault();
        $('.search-bar').addClass('active');
    });
    $('.search-bar a').on('click', function (e) {
        e.preventDefault();
        $('.search-bar').removeClass('active');
    });

    $('.to-top').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
        return false;
    });


});
