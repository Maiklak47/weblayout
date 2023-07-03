document.addEventListener('DOMContentLoaded', function () {
  // ######## slide ######
  let swiper = new Swiper(".swiper", {
    a11y: {
      prevSlideMessage: 'Предыдущиый слайд',
      nextSlideMessage: 'Следующий слайд',
      lastSlideMessage: 'Это последний слайд',
      firstSlideMessage: 'Это первый слайд',
      paginationBulletMessage: 'Перейти к слайду {{index}}'
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    }
  });

  // ########## tabs #########
  let tabsBtn = document.querySelectorAll('.how__item');
  let tabsItem = document.querySelectorAll('.how__step');

  tabsBtn.forEach(function (element) {
    element.addEventListener('click', function (e) {
      const path = e.currentTarget.dataset.path;

      tabsBtn.forEach(function (btn) { btn.classList.remove('how__item--active') });
      e.currentTarget.classList.add('how__item--active');

      tabsItem.forEach(function (element) { element.classList.remove('how__step--active') });
      document.querySelector(`[data-target="${path}"]`).classList.add('how__step--active');
    });
  });

  // ####### accordion #########
  new Accordion('.accordion');


  // ####### burger #########
  let burger = document.querySelector('.header__burger');
  let nav = document.querySelector('.header__nav');
  let navLinks = document.querySelectorAll('.nav__link');

  burger.addEventListener('click', function () {
    burger.classList.toggle('header__burger--active');

    nav.classList.toggle('header__nav--active');

    document.body.classList.toggle('stop-scroll');
  })

  navLinks.forEach(function (el) {
    el.addEventListener('click', function () {
      burger.classList.remove('header__burger--active');

      nav.classList.remove('header__nav--active');

      document.body.classList.remove('stop-scroll');
    })
  })


  // ####### search #########

  let btn = document.querySelector('.header__button');
  let search = document.querySelector('.header__search');
  let searchClosed = document.querySelector('.header__closed');

  btn.addEventListener('click', function () {
    search.classList.add('header__search--active');

    btn.classList.add('header__button--active');

    document.body.classList.toggle('stop-scroll');
  })

  searchClosed.addEventListener('click', function () {
    search.classList.remove('header__search--active');

    btn.classList.remove('header__button--active');

    document.body.classList.remove('stop-scroll');
  })
})



// я нашел кусок  кода js:    $(".ui-accordion-header")
//   .attr("tabindex","0")
//       }); - теперь табом можно ходить по вкладкам и читалка их видит)





// a11y: {
//   prevSlideMessage: 'Предыдущиый слайд',
//   nextSlideMessage: 'Следующий слайд',
//   lastSlideMessage: 'Это последний слайд',
//   firstSlideMessage: 'Это первый слайд',
//   paginationBulletMessage: 'Перейти к слайду {{index}}'
// }
