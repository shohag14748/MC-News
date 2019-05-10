$(document).ready(function () {
    $('.nav-search a').on('click', function (e) {
        e.preventDefault();
        $(this).siblings().addClass('active');
    })

//    $('.banner-slider').slick({
//        setting - name: setting - value
//    });
//        $('.single-item').slick();
    
        $('.banner-slider').slick({
            dots: true,
        });
});
