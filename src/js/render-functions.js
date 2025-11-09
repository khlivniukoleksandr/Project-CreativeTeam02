import { categoryBackgroundImg, refs } from './refs';
import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

refs.loader.classList.add('visually-hidden');

export const renderCategories = data => {
  const markup = data
    .map(category => {
      if (typeof category === 'string') {
        const background = categoryBackgroundImg['all'];
        return `
          <li class="furniture-categories-list-item" style="background-image: url('${background}')">
            <span class="category-name">${category}</span>
          </li>
        `;
      }

      const background = categoryBackgroundImg[category._id];
      return `
        <li class="furniture-categories-list-item" style="background-image: url('${background}')" data-id="${category._id}">
          <p class="category-name">${category.name}</p>
        </li>
      `;
    })
    .join('');

  refs.categoryList.innerHTML = markup;
};

export const renderProducts = data => {
  return data.furnitures
    .map(furniture => {
      const firstImage = furniture.images[0];
      const colors = furniture.color;

      const colorCheckboxes = colors
        .map(
          color => `
          <label class="color-checkbox" style="--color: ${color}">
            <input type="radio" name="color-${furniture._id}" value="${color}" style="accent-color: ${color}" />
            <span class="color-box"></span>
          </label>
        `
        )
        .join('');

      return `
        <li class="product-card" data-id="${furniture._id}">
          <img src="${firstImage}" alt="${furniture.name}" class="furniture-card-img" loading="lazy" decoding="async"/>
          <p class="furniture-name">${furniture.name}</p>
          <div class="color-options">${colorCheckboxes}</div>
          <p class="furniture-price">${furniture.price} грн</p>
          <button type="button" class="button button-furnitures-detail">Детальніше</button>
        </li>
      `;
    })
    .join('');
};

export const createGallery = furnitures => {
  if (!refs.furnitureList) return;

  const markup = renderProducts({ furnitures });
  refs.furnitureList.insertAdjacentHTML('beforeend', markup);
};

export const showLoader = () => {
  refs.loader.classList.remove('visually-hidden');
};

export const hideLoader = () => {
  refs.loader.classList.add('visually-hidden');
};

export const showButtonLoad = () => {
  refs.loadButton.classList.remove('visually-hidden');
};

export function renderFaqAccordion() {
  const faqAccordion = document.querySelector('.accordion-container');

  if (faqAccordion) {
    new Accordion(faqAccordion, {
      duration: 300,
      showMultiple: false,
    });
  }
}

export const renderFurnitureModal = data => {
  const galleryMarkup = `<div class="modal-furniture-gallery-main-container">
      <img src="${data.images[0]}" alt="${
    data.name
  }" class="modal-furniture-gallery-main-image" />
    </div>
    <div class="modal-furniture-gallery-thumbs">
      ${data.images
        .slice(1)
        .map(
          src => `
          <div class="modal-furniture-thumb-wrap">
            <img src="${src}" alt="${data.name}" class="modal-furniture-thumb" />
          </div>
        `
        )
        .join('')}
    </div>
  `;

  refs.modalGallery.innerHTML = galleryMarkup;
  const colorCheckboxes = data.color

    .map(
      (color, index) => `
        <label class="modal-furniture-color ">
          <input class="modal-furniture-color-input" type="radio" name="color-${
            data._id
          }" value="${color}" style="accent-color: ${color}" ${
        index === 0 ? 'checked' : ''
      } />
          <span style="background-color: ${color}"></span>
        </label>
  `
    )
    .join('');
  console.log(colorCheckboxes);

  const infoMarkup = `
    <h2 class="modal-furniture-title">${data.name}</h2>
    <p class="modal-furniture-category">${data.category.name}</p>
    <p class="modal-furniture-price">${data.price} грн</p>
    <div id="container-rating-id" class="modal-furniture-rating"></div>
    <div class="modal-furniture-colors-wrap">
      <p class="modal-furniture-info-label">Колір</p>
      <div class="modal-furniture-color-list">${colorCheckboxes}</div>
    </div>
    <p class="modal-furniture-description">${data.description}</p>
    <div class="modal-furniture-sizes-wrap">
      <p class="modal-furniture-info-label-sizes">Розміри:</p>
      <p class="modal-furniture-sizes-value">${data.sizes}</p>
    </div>
    <button type="button" class="button modal-furniture-btn modal-open-order-btn">
      Перейти до замовлення
    </button>
`;

  refs.modalInfo.innerHTML = infoMarkup;

  const ratingContainer = document.querySelector('#container-rating-id');
  const rating = roundRating(data.rate);
  ratingContainer.innerHTML = '';
  renderRatingStars(ratingContainer, rating);
};

export const renderRatingStars = (container, rating) => {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 === 0.5;

  [...Array(fullStars)].map(() => {
    const star = document.createElement('span');
    star.className = 'star-rating__star';
    star.innerHTML = '★';
    container.appendChild(star);
  });
  if (hasHalf) {
    const half = document.createElement('span');
    half.className = 'star-rating__star is-half';
    half.innerHTML = '★';
    container.appendChild(half);
  }

  const emptyCount = 5 - fullStars - (hasHalf ? 1 : 0);
  [...Array(emptyCount)].map(() => {
    const empty = document.createElement('span');
    empty.className = 'star-rating__star is-empty';
    empty.innerHTML = '☆';
    container.appendChild(empty);
  });
};

const roundRating = rate => {
  const whole = Math.floor(rate);
  const decimal = rate - whole;

  if (decimal >= 0.3 && decimal <= 0.7) {
    return whole + 0.5; // 3.3 -> 3.7 = 3.5
  }
  if (decimal >= 0.8) {
    return Math.min(whole + 1, 5); // 3.8 -> 4.2 = 4.0, 4.8 -> 5.0
  }
  return whole; // 0.3 ->
};

export function openModalFurniture() {
  refs.modalBackdrop.classList.remove('is-hidden');
  refs.modalBackdrop.classList.add('fade-in');
  document.body.style.overflow = 'hidden';
}

export function closeModalFurniture() {
  refs.modalBackdrop.classList.remove('fade-in');
  refs.modalBackdrop.classList.add('fade-out');

  setTimeout(() => {
    refs.modalBackdrop.classList.add('is-hidden');
    refs.modalBackdrop.classList.remove('fade-out');
    document.body.style.overflow = '';
  }, 300);
}

export function initModalFurniture() {
  const closeBtn = refs.modalBackdrop.querySelector(
    '.modal-furniture-close-btn'
  );
  const orderBtn = refs.modalBackdrop.querySelector('.modal-open-order-btn');

  closeBtn.addEventListener('click', closeModalFurniture);
  refs.modalBackdrop.addEventListener('click', e => {
    if (e.target.classList.contains('modal-furniture-backdrop'))
      closeModalFurniture();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModalFurniture();
  });

  orderBtn.addEventListener('click', () => {
    closeModalFurniture();
  });
}
