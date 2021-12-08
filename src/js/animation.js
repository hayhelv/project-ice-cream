$(window).scroll(function () {
    $('.mov').each(function () {
        var imagesPos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagesPos < topOfWindow+200) {
            $(this).addClass('animate__pulse');
            $(this).addClass($(this).data('animation'));
        }
    });
});