import './js/header.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { LIMIT } from './js/constants';
import { getCategories, getIdProduct, getProducts } from './js/handlers';
import { fetchFurniture, getPage, incrementPage } from './js/products-api';
import { refs } from './js/refs';
import {
  createGallery,
  hideLoader,
  renderFaqAccordion,
  renderProducts,
  showButtonLoad,
  showLoader,
} from './js/render-functions';
import { renderFeedback, fetchFeedback } from './js/feedback';
import { submitOrderForm } from './js/helpers';

let currentCategoryId = null;

getCategories();
getProducts();
refs.loadButton.addEventListener('click', async () => {
  const nextPage = getPage() + 1;
  try {
    showLoader();
    const response = await fetchFurniture(nextPage, currentCategoryId);
    const totalItems = response.totalItems;
    const totalpages = Math.ceil(totalItems / LIMIT);

    if (nextPage > totalpages) {
      refs.loadButton.classList.add('visually-hidden');
      hideLoader();
      return iziToast.error({
        position: 'topRight',
        message: 'Sorry there are no more products',
      });
    }

    incrementPage();
    createGallery(response.furnitures);
    hideLoader();
  } catch (error) {
    console.error(error);
  }

  const firstCard = document.querySelector('.furniture-categories-list-item');
  if (firstCard) {
    const cardHeight = firstCard.getBoundingClientRect().height;
    window.scrollBy({
      top: cardHeight * 6.5,
      behavior: 'smooth',
    });
  }
});

export const onCategoryClick = async event => {
  //
  const li = event.target.closest('.furniture-categories-list-item');
  if (!li) return;

  document
    .querySelectorAll('.furniture-categories-list-item')
    .forEach(el => el.classList.remove('current-category'));

  li.classList.add('current-category');
  //
  const categoryItem = event.target.closest('[data-id]');
  let categoryId = null;
  if (categoryItem) {
    categoryId = categoryItem.dataset.id;
  }
  currentCategoryId = categoryId;
  try {
    const response = await fetchFurniture(1, categoryId);
    refs.furnitureList.innerHTML = '';
    const markup = renderProducts(response);
    refs.furnitureList.insertAdjacentHTML('beforeend', markup);
    showButtonLoad();
  } catch (error) {
    console.log(error);
  }
};

refs.categoryList.addEventListener('click', onCategoryClick);

renderFaqAccordion();

const createFeedbackSection = async () => {
  const feedbackData = await fetchFeedback();

  renderFeedback(feedbackData.feedbacks);
};

createFeedbackSection();

const furnitureListID = refs.furnitureList;
furnitureListID.addEventListener('click', event => {
  if (event.target.classList.contains('button-furnitures-detail')) {
    const productCard = event.target.closest('.product-card');
    if (productCard) {
      refs.modalGallery.innerHTML = '';
      refs.modalInfo.innerHTML = '';
      const productId = productCard.dataset.id;
      getIdProduct(productId);
    }
  }
});

refs.orderModalForm.addEventListener('submit', submitOrderForm);
