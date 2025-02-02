
const header = document.querySelector('.header');

const infoBlock = document.querySelectorAll('.info__block')

const btn = document.querySelector('.header__btn')

let active = false

var oldScrollY = 0;

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

    btn.addEventListener("click" ,() => {
        if (active) {
            menu.close()
            active = false
        } else {
            menu.show()
            active = true
        }
    })

    window.addEventListener('scroll', function(){
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;
        var dY = scrolled - oldScrollY;
        
        if ( dY > 0 ){
          header.classList.add('header--hidden');
          menu.close()
        } else {
            header.classList.remove('header--hidden');
        }
        
        oldScrollY = scrolled;
    });

    infoBlock.forEach((item) => {
        item.addEventListener('click', (event) => {
            item.classList.toggle("info__block--active")
        })
    })
}

