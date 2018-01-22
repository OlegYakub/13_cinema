$(document).ready(function() {
    var ww = document.documentElement.clientWidth;

    if (ww > 1170) {
        $('.nav__list').smoothDivScroll({
            hotSpotScrolling: false,
            mousewheelScrolling: false,
            touchScrolling: true,  
        });
    } else {
        $('.nav__list').owlCarousel({
            loop: false, 
            autoWidth: true,
            dots: false,
            items:4
        }); 
    }

    if (ww < 743) {
        $('.series__list').addClass('owl-carousel');
        $('.series__list').owlCarousel({
            autoWidth: true,
            dots: false
        }); 
    }

    $('.content__quality').click(setActiveElement);

    function setActiveElement() {
        let className = this.classList[0];
        $('.' + className).removeClass('active');
        $(this).addClass('active');
    };

    //category, search popap toggle
    (function(){
        let closedModal;
        $('.header__category').click(() => toogle('.categories'));
        $('.search').click(() => toogle('.search-modal'));
        $(document).mouseup(closeAll);

        function toogle(el) {
            if (el != closedModal) $(closedModal).slideUp();
            $(el).slideToggle();
            closedModal = el
        }

        function closeAll(e) {
            var area = $(".header, .categories, .search-modal");

            if (area.has(e.target).length === 0){
                $(closedModal).slideUp();
            } 
        }
    })();

    //fosuc on search
    (function(){
        $('.search').click(focus);

        function focus() {
            $('.search-modal__input').focus();
        }
    })();

    //tabs
    (function(){
        $('.nav__link').click(taber);

        function taber(e) {
            var $this = $(this);
            var id = +$this.attr('data-id');

            $('.nav__item').removeClass('active');
            $this.closest('.nav__item').addClass('active');
            $('.series__list').hide();
            $('.series__list#season' + id).show();
        }

        function setDefaultEl() {
            var id = +$('.nav__item.active').children('.nav__link').attr('data-id')

            $('.series__list').hide();
            $('.series__list#season' + id).show();
        }

        setDefaultEl();
    })();
});