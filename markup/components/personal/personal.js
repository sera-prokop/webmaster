export default {
    init: function () {
        $('.personal__field--drop').on('click',function() {

            let $this = $(this),
                input = $this.find('input'),
                select = $this.find('ul'),
                svg = $this.find('svg'),
                items = select.find('li');


            $this.toggleClass('active');
            select.toggleClass('active');

            items.on('click',function() {
                let $this = $(this),
                    text = $this.text();
                input.val(text);
                // $this.css('order','-1').siblings().removeAttr('style');
                $this.addClass('active').siblings().removeClass('active');
            });
        });
    }
}
