export const activeFirstCategory = () => {
  const firstCategory = document.querySelector(
    '.furniture-categories-list-item'
  );
  if (firstCategory) {
    firstCategory.classList.add('current-category');
  }
};
