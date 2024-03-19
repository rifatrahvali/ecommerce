const swiper = new Swiper('.home-swiper', {
    speed: 400,
    spaceBetween:10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});

const brandSwiper = new Swiper('.nav-brand-swiper', {
    speed: 900,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    autoplay:{
        delay:1000,
        pauseOnMouseEnter:true,
    }
});