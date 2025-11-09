import { BASE_URL, ENDPOINTS } from './constants';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import axios from 'axios';
import 'css-star-rating/css/star-rating.css';
import { refs } from './refs';

axios.defaults.baseURL = BASE_URL;

const roundScore = function (score) {
  const integer = Math.floor(score);
  let decimal = (score.toString() + '0').split('.')[1];
  if (!decimal) return 'value-' + integer;
  decimal = parseInt(decimal.slice(0, 2), 10);
  if (decimal < 30) return 'value-' + integer;
  else if (decimal > 70) return 'value-' + (integer + 1);
  else return 'value-' + integer + ' half';
};

export const renderFeedback = function (data) {
  refs.feedbackWrapper.innerHTML = data
    .map(feedback => {
      return `<div class="swiper-slide">
        <div class="rating ${roundScore(feedback.rate)} color-default">
    <div class="star-container">
        <div class="star">
            <svg class="star-filled">
               <use href="img/icons.svg#icon-star-filled"></use>
            </svg>
            <svg class="star-half">
               <use href="img/icons.svg#icon-star-half"></use>
            </svg>
            <svg class="star-empty">
                <use href="img/icons.svg#icon-star-empty"></use>
            </svg>
        </div>
        <div class="star">
            <svg class="star-filled">
               <use href="img/icons.svg#icon-star-filled"></use>
            </svg>
            <svg class="star-half">
               <use href="img/icons.svg#icon-star-half"></use>
            </svg>
            <svg class="star-empty">
                <use href="img/icons.svg#icon-star-empty"></use>
            </svg>
        </div>
        <div class="star">
            <svg class="star-filled">
               <use href="img/icons.svg#icon-star-filled"></use>
            </svg>
            <svg class="star-half">
               <use href="img/icons.svg#icon-star-half"></use>
            </svg>
            <svg class="star-empty">
                <use href="img/icons.svg#icon-star-empty"></use>
            </svg>
        </div>
        <div class="star">
            <svg class="star-filled">
               <use href="img/icons.svg#icon-star-filled"></use>
            </svg>
            <svg class="star-half">
               <use href="img/icons.svg#icon-star-half"></use>
            </svg>
            <svg class="star-empty">
                <use href="img/icons.svg#icon-star-empty"></use>
            </svg>
        </div>
        <div class="star">
            <svg class="star-filled">
               <use href="img/icons.svg#icon-star-filled"></use>
            </svg>
            <svg class="star-half">
               <use href="img/icons.svg#icon-star-half"></use>
            </svg>
            <svg class="star-empty">
                <use href="img/icons.svg#icon-star-empty"></use>
            </svg>
        </div>
    </div>
</div>
        <p class="feedback-text">"${feedback.descr}"</p>
        <p class="feedback-name">${feedback.name}</p>
        </div>`;
    })
    .join('');

  const swiper = new Swiper(refs.feedbackSwiper, {
    modules: [Navigation, Pagination],
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      addIcons: false,
    },
    slidesPerView: 1,
    spaceBetween: 0,
    dynamicBullets: false,

    breakpoints: {
      769: {
        slidesPerView: 2,
      },
      1440: {
        slidesPerView: 3,
      },
    },
  });
};

//new Raty(document.querySelector('.div'), { score: 3, round: { down: .29, up: 0.71 }, readOnly:true });

export const fetchFeedback = async () => {
  const { data } = await axios(`${ENDPOINTS.FEEDBACKS}`, {
    params: {
      limit: 10,
    },
  });
  return data;
};
