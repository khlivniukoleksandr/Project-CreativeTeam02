import all from '../img/furniture-list/1all_products.jpg';
import kitchen from '../img/furniture-list/7kitchens.jpg';
import hallway from '../img/furniture-list/10furniture_hallway.jpg';
import garden from '../img/furniture-list/12garden_furnitures.jpg';
import table from '../img/furniture-list/5tables.jpg';
import sofa from '../img/furniture-list/2sofas.jpg';
import child from '../img/furniture-list/8child_furniture.jpg';
import accesoires from '../img/furniture-list/13accessoires.jpg';
import washroom from '../img/furniture-list/11furniture_washrooms.jpg';
import office from '../img/furniture-list/9office_furnitures.jpg';
import wardrobe from '../img/furniture-list/3wardrobe.jpg';
import bed from '../img/furniture-list/4beds.jpg';
import chair from '../img/furniture-list/6chairs.jpg';

export const refs = {
  categoryList: document.querySelector('.furniture-categories-list'),
  furnitureList: document.querySelector('.furniture-list'),
  loader: document.querySelector('.loader'),
  loadButton: document.querySelector('.button-load-more-furnitures'),
  feedbackSwiper: document.querySelector('.feedback-swiper'),
  modalBackdrop: document.querySelector('.modal-furniture-backdrop'),
  modalGallery: document.querySelector('.modal-furniture-gallery'),
  modalInfo: document.querySelector('.modal-furniture-info'),
  makeOrderButton: document.querySelector('.modal-furniture-btn'),
  orderModal: document.querySelector('.backdrop'),
  orderModalForm: document.querySelector('.modal-form'),
};

refs.feedbackWrapper = refs.feedbackSwiper?.querySelector('.swiper-wrapper');

export const categoryBackgroundImg = {
  all,
  '66504a50a1b2c3d4e5f6a7bd': kitchen,
  '66504a50a1b2c3d4e5f6a7c0': hallway,
  '66504a50a1b2c3d4e5f6a7c2': garden,
  '66504a50a1b2c3d4e5f6a7bb': table,
  '66504a50a1b2c3d4e5f6a7b8': sofa,
  '66504a50a1b2c3d4e5f6a7be': child,
  '66504a50a1b2c3d4e5f6a7c3': accesoires,
  '66504a50a1b2c3d4e5f6a7c1': washroom,
  '66504a50a1b2c3d4e5f6a7bf': office,
  '66504a50a1b2c3d4e5f6a7b9': wardrobe,
  '66504a50a1b2c3d4e5f6a7ba': bed,
  '66504a50a1b2c3d4e5f6a7bc': chair,
};
