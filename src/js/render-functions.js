import { categoryBackgroundImg, refs } from './refs';

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
        <li class="product-card">
          <img src="${firstImage}" alt="${furniture.name}" class="furniture-card-img"/>
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
