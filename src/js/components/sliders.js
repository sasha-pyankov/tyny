//подключаем например swiper, переменную подключаем отдельно
import _vars from '../_vars.js'
import Swiper, { Pagination, Navigation } from 'swiper'

Swiper.use([Pagination, Navigation]);

new Swiper (_vars.heroSliderEl, {
  slidesPerView: 'auto',
  // бесконечная прокрутка
  loop: true,
  // Скорость прокрутки
  slidesPerView: 2,
    // Паралакс
  parallax: true,
  // Упарвление клавиатурой
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  autoHeight: true,
  navigation: {
    nextEl: '.speakers-next',
    prevEl: '.speakers-prev',
  },
  pagination: {
    el: '.speakers-swiper-pagination',
    clickable: true,
  },
  // Отключение функционала, если слайдов меньше чем нужно
  watchOverflow: true,
  // Обновить свайпер при изменении элементов свайпера
  observer: true,
  // Обновить свайпер при изменении дочерних элементов свайпера
  observeSlideChildren: true,
  // Обновить свайпер при изменении родительских элементов свайпера
  observeParents: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
      autoHeight: true
    },
    670: {
      spaceBetween: 42,
      slidesPerView: 2,
    },
  },
})