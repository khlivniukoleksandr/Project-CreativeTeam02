import { BASE_URL, ENDPOINTS } from './constants';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import axios from 'axios';

const feedbackSwiper = document.querySelector(".feedback-swiper")
const feedbackWrapper = feedbackSwiper.querySelector(".swiper-wrapper")
axios.defaults.baseURL = BASE_URL
export const renderFeedback = function (data) {

    feedbackWrapper.innerHTML = data.map(feedback => {
        return `<div class="swiper-slide">
        <div class="feedback-rating">${feedback.rate}</div>
        <p class="feedback-text">${feedback.descr}</p>
        <p class="feedback-name">${feedback.name}</p>
        </div>`

    }).join("")

    const swiper = new Swiper(feedbackSwiper, {
        modules: [Navigation, Pagination],
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });


}


// const roundScore = function (score) {
//     const integer = Math.floor(score)
//     let decimal = (score.toString() + "0").split('.')[1];
//     if (!decimal) return integer
//     decimal = parseInt(decimal.slice(0, 2), 10)
//     if (decimal < 30) decimal = 0
//     else if (decimal > 70) decimal = 1
//     else decimal = 0.5

//     return integer + decimal
// }

//new Raty(document.querySelector('.div'), { score: 3, round: { down: .29, up: 0.71 }, readOnly:true });

export const fetchFeedback = async () => {
    const { data } = await axios(`${ENDPOINTS.FEEDBACKS}`, {
        params: {
            limit: 10,
        }
    })
    return data
}