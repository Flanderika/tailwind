import Swiper from 'swiper';
import { Navigation} from 'swiper/modules';
import 'swiper/css';

const swiper = new Swiper('.swiper', {
  modules: [Navigation],
  slidesPerView: 4,
  spaceBetween: 40,
  navigation: {
    nextEl: '.swiper__button--next',
    prevEl: '.swiper__button--prev',
  },
});