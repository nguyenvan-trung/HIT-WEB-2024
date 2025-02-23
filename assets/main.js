

document.addEventListener("DOMContentLoaded", function () {
    
    new Swiper('.card_wrapper', {
        slidesPerView: 4,
        loop: true,
        spaceBetween: 40,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: false,
        breakpoints: {
			300: {
				slidesPerView: 1,
			},
			500: {
				slidesPerView: 2,
			},
			640: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 3,

			},
			991: {
				slidesPerView: 3,

			},
			1200: {
				slidesPerView: 4,

			}
		}
    });

        new Swiper('.card_nam', {
        slidesPerView: 3,
        loop: true,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: false,
        breakpoints: {
			0: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			1024: {
				slidesPerView:3,
			},
            autoplay: true
			// 768: {
			// 	slidesPerView: 3,

			// },
			// 991: {
			// 	slidesPerView: 3,

			// },
			// 1200: {
			// 	slidesPerView: 4,

			// }
		}
    });

});



