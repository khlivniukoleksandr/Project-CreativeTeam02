import { refs } from './refs';

const nameLabel = document.querySelector('[for="modal-order-name"]');
const nameInput = document.querySelector('[name="user-name"]');
const nameErrorMessage = document.querySelector('.name-required-message');

const telInput = document.querySelector('[name="modal-order-tel"]');
const telLabel = document.querySelector('[for="modal-order-tel"]');
const telErrorMessage = document.querySelector('.tel-required-message');

export const activeFirstCategory = () => {
  const firstCategory = document.querySelector(
    '.furniture-categories-list-item'
  );
  if (firstCategory) {
    firstCategory.classList.add('current-category');
  }
};

export function closeOrderModal() {
  refs.orderModal.classList.remove('fade-in');
  refs.orderModal.classList.add('fade-out');
  document.body.classList.remove('no-scroll');

  setTimeout(() => {
    refs.orderModal.classList.remove('is-open');
    refs.orderModal.classList.remove('fade-out');
    document.body.style.overflow = '';
  }, 300);
}

const closeOrderModalBtn = document.querySelector('.modal-close-btn');
closeOrderModalBtn.addEventListener('click', closeOrderModal);
refs.orderModal.addEventListener('click', event => {
  if (event.target.classList.contains('backdrop')) closeOrderModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeOrderModal();
});

export const submitOrderForm = async event => {
  event.preventDefault();
  const name = event.target.elements['user-name'].value.trim();
  const tel = event.target.elements['modal-order-tel'].value.trim();

  let hasError = false;

  if (name.length === 0) {
    nameLabel.classList.add('error-label');
    nameInput.classList.add('error-input');
    nameErrorMessage.classList.remove('visually-hidden');
    hasError = true;
  } else {
    nameLabel.classList.remove('error-label');
    nameInput.classList.remove('error-input');
    nameErrorMessage.classList.add('visually-hidden');
  }

  if (tel.length === 0) {
    telLabel.classList.add('error-label');
    telInput.classList.add('error-input');
    telErrorMessage.classList.remove('visually-hidden');
    hasError = true;
  } else {
    telLabel.classList.remove('error-label');
    telInput.classList.remove('error-input');
    telErrorMessage.classList.add('visually-hidden');
  }
  if (hasError) return;
  closeOrderModal();
  refs.orderModalForm.reset();
};
