export default {
    init: function () {

        let settings = {
          activeEl: 3,
        },
        svgActive = $('.slider__svg-line-active'),
        svgPointer = $('.slider__svg-pointer');


        svgActive.addClass(`active-${settings.activeEl}`);
        svgPointer.addClass(`active-${settings.activeEl}`);
        $('.slider__item').on('click', function () {
            let $this = $(this),
                itemData = $this.data('item');

            function activeAttr(el) {
                el.attr(
                    'class',
                    el.attr('class').replace(/\bactive-\d+\b/g, '')
                );
                el.addClass(`active-${itemData}`);
            }

            activeAttr(svgActive);
            activeAttr(svgPointer);

        });
    }
};
