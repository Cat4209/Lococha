$(document).ready(()=>{
    let swiper = new Swiper('.swiper-container-1',{
        parallax: true,
        speed: 900,
        navigation: {
            nextEl: '.swiper-button-next-1',
            prevEl: '.swiper-button-prev-1',
          },
        simulateTouch: false,
    });
    $(".swiper_pagination_1").click(function(){swiper.slideTo(0)});
    $(".swiper_pagination_2").click(function(){swiper.slideTo(1)});                     
    $(".swiper_pagination_3").click(function(){swiper.slideTo(2)});
    $(".swiper_pagination_4").click(function(){swiper.slideTo(3)});
    $(".swiper_pagination_1").attr("class", "swiper_pagination_active swiper_pagination swiper_pagination_1");
    swiper.on('slideChange', function (){
        let aI = swiper.activeIndex+1;
        $(".swiper_pagination").removeClass("swiper_pagination_active");
        $(".swiper_pagination_"+aI).attr("class", "swiper_pagination_active swiper_pagination swiper_pagination_"+aI);
        console.log(aI);
    });
    let swiper_2 = new Swiper('.swiper-container-2', {
        speed: 500,
        spaceBetween: 10,
    });
    let swiper_3 = new Swiper('.swiper-container-3', {
        speed: 800,
        effect: 'fade',
        simulateTouch: false,
    });
    swiper_2.on('slideChange', ()=>{
        let SecondSwiperActiveSlide = swiper_2.activeIndex;
        let SSAS = SecondSwiperActiveSlide+1;
        $(".swiper__pagination").removeClass("swiper__pagination_active");
        $(".swiper__pagination_"+SSAS).attr("class", "swiper__pagination_active swiper__pagination swiper__pagination_"+SSAS);
        swiper_3.slideTo(SecondSwiperActiveSlide);
    });
    $(".swiper__pagination_1").click(function(){swiper_2.slideTo(0)});
    $(".swiper__pagination_2").click(function(){swiper_2.slideTo(1)});                     
    $(".swiper__pagination_3").click(function(){swiper_2.slideTo(2)});
    $(".swiper__pagination_1").attr("class", "swiper__pagination_active swiper__pagination swiper__pagination_1");
});
