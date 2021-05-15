$(function () {
    $('.game-slider').slick({
        centerMode: true,
        dots: true,
        centerPadding: '60px',
        slidesToShow: 5,
        autoplay: true,
        initialSlide: 2,
        variableWidth: true,
        prevArrow: '<button type="button" class="game-slider__btn game-slider__btn_left slick-prev"><img src="../img/game-slider/game-slider-arrow_left.png" alt=""></button>',
        nextArrow: '<button type="button" class="game-slider__btn game-slider__btn_right slick-next"><img src="../img/game-slider/game-slider-arrow_right.png" alt=""></button>',
        responsive: [
            {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
            },
            {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
            }
        ]
    });
});