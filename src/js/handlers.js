import { activeFirstCategory } from './helpers';
import { fetchCategories, fetchFurniture, getPage } from './products-api';
import { refs } from './refs';
import {
  hideLoader,
  renderCategories,
  renderProducts,
  showButtonLoad,
  showLoader,
} from './render-functions';

export const getCategories = async () => {
  showLoader();
  try {
    const categories = await fetchCategories();
    renderCategories(['Всі товари', ...categories]);
    activeFirstCategory();
  } catch (error) {
    console.log(error);
  }
  hideLoader();
};

export const getProducts = async () => {
  showLoader();
  try {
    const response = await fetchFurniture(getPage());
    const markup = renderProducts(response);
    refs.furnitureList.insertAdjacentHTML('beforeend', markup);
  } catch (error) {
    console.log(error);
  }
  hideLoader();
  showButtonLoad();
};
