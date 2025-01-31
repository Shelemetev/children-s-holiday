
const header = document.querySelector('.header');

const infoBlock = document.querySelectorAll('.info__block')

window.onload = () => {
    const reviewsSlider = new Swiper('.reviews__slider', {
        slidesPerView: 2,
        spaceBetween: 30,
        calculateHeight:true,
        navigation: {
            nextEl: '.reviews__slider-btn--next',
            prevEl: '.reviews__slider-btn--prev',
        },
        breakpoints: {
            992: {
                slidesPerView: 2
            },
            576: {
                slidesPerView: 1.5
            },
            220: {
                slidesPerView: 1.3
            }, 
        }
    })

    window.addEventListener("wheel", (evnt) => {
        if (evnt.deltaY > 0) {
            header.classList.add('header--hidden')
        } else {
            header.classList.remove('header--hidden')
        }
    })

    infoBlock.forEach((item) => {
        item.addEventListener('click', (event) => {
            item.classList.toggle("info__block--active")
        })
    })
}

