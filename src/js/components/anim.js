import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);// регестрация плагинов

const tl = gsap.timeline();
  // const laptopScreen = window.matchMedia('(min-width: 767.98px)'); //работает от 767 и выше

tl.fromTo(
  '.header__logo img', {opacity: 0,}, {opacity: 1, duration: 3,}
).fromTo(
  '.nav__list .nav__item', {y: -200, opacity: 0}, {y: 0, opacity: 1, stagger: 0.1,}, 0.3
).fromTo(
  '.nav__btn', {y: -300, opacity: 0,}, {y: 0, opacity: 1, duration: 1,}, 0.2
).fromTo(
  '.icon-mail img', {opacity: 0,}, {y: 0, opacity: 1, duration: 1,}, 1.6
).fromTo(
  '.icon-facebook img', {opacity: 0,}, {y: 0, opacity: 1, duration: 1,}, 1.8
).fromTo(
  '.home__content-img', {xPercent: -100, opacity: 0}, {xPercent: 0, opacity: 1, ease: 'elastic', duration: 2}, 1
).fromTo(
  '.home__img', {xPercent: 100, opacity: 0}, { xPercent: 0, opacity: 1, ease: 'elastic', duration: 2}, 1.6
).fromTo(
  '.home__btn', {opacity: 0}, {opacity: 1}, 1.6
).fromTo(
  '.home__descr h1', {xPercent: -100, opacity: 0}, {xPercent: 0, opacity: 1}, 1.6
).fromTo(
  '.home__descr p', {xPercent: -100, opacity: 0}, {xPercent: 0, opacity: 1}, 1.8
)