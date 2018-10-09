export default {
    init: function () {
        var hamburger = $('#hamburger-icon');
        hamburger.click(function() {
            hamburger.siblings('.header__list').toggleClass('active');
            hamburger.toggleClass('active');
            return false;
        });

        $('.header__link').on('click', function(e) {
            e.preventDefault();

            var target = $(this).attr("href");

            $('html, body').stop().animate({
                scrollTop: $(target).offset().top - 90
            }, 600);

            return false;
        });

    }
}
